# from django.shortcuts import render
# don't want user to have to be authenticated in order to send message
import django
from rest_framework import permissions 
from rest_framework.views import APIView
from .models import Contact
from django.core.mail import send_mail
from rest_framework.response import Response
import os
from dotenv import load_dotenv
load_dotenv()
# from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.csrf import ensure_csrf_cookie


# Create your views here.

class ContactCreateView(APIView):
    permission_classes = (permissions.AllowAny, )

    # @csrf_exempt
    # @ensure_csrf_cookie

    def post(self, request, format=None):
        
        data = self.request.data

        try:
            send_mail(
                data['subject'],
                'Name: '
                + data['name']
                + '\nEmail: '
                + data['email']
                + '\n\nMessage:\n'
                + data['message'],
                os.getenv('EMAIL_HOST_USER'),
                [os.getenv('EMAIL_HOST_USER')], #send email to itself
                fail_silently=False
            )

            contact = Contact(name=data['name'], email=data['email'], subject=data['subject'], message=data['message'])
            contact.save()

            return Response({'success':'Message sent successfully'})

        except:
            return Response({'error':'Message failed to send'})