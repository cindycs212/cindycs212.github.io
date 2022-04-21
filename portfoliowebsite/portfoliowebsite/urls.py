"""portfoliowebsite URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
# from django.urls import path
from django.urls import re_path, include
from backend.views import frontendViews
from django.views.generic import TemplateView

# use re_path and '.*' instead of '' to help locate manifest.json, otherwise there's a 404 error
urlpatterns = [
    # include rest framework
    re_path('api-auth/', include('rest_framework.urls')),
    re_path('admin/', admin.site.urls),
    re_path('.*', frontendViews, name='front'),
    re_path('api/contact/', include('contact.urls')),
]

# catch all other routes that aren't in the above and catch 404 errors
# utilize react here, build template which have react app and have react router which does frontend routing
# all frontend routing will be caught here
urlpatterns += [re_path(r'^.*', TemplateView.as_view(template_name='index.html'))]
