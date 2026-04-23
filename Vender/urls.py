
from django.urls import path
from . import views

urlpatterns = [
    path('Login/', views.Login, name='Login'),
    path('Register/', views.Register, name='Register'),
    path('Forget-Password/', views.Forget_Password, name='Forget_Password'),
    path('Verify-Otp/', views.Verify_Otp, name='Verify_Otp'),
    path('Change-Password/', views.Change_Password, name='Change_Password'),

    path('Agency-Setup/', views.Agency_Setup, name='Agency_Setup'),
]

