from django.urls import path
from .views import ContactCreateView

urlpatterns = [
    # by keeping '', the url to access contact form remains api/contact/
    path('', ContactCreateView.as_view()),
]
