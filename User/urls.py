
from django.urls import path
from . import views

app_name = 'User'

urlpatterns = [
    path('User/login/', views.login, name='login'),
    path('User/signup/', views.signup, name='signup'),
    path('User/forget-password/', views.forget_password, name='forget_password'),
    path('User/verify-otp/', views.verify_otp, name='verify_otp'),
    path('User/change-password/', views.change_password, name='change_password'),
]