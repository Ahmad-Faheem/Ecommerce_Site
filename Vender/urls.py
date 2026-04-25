
from django.urls import path
from . import views

app_name = 'Vender'

urlpatterns = [
    path('Vender/Login/', views.V_Login, name='Login'),
    path('Vender/Register/', views.V_Register, name='Register'),
    path('Vender/Forget-Password/', views.V_Forget_Password, name='Forget_Password'),
    path('Vender/Verify-Otp/', views.V_Verify_Otp, name='Verify_Otp'),
    path('Vender/Change-Password/', views.V_Change_Password, name='Change_Password'),
    path('Vender/Agency-Setup/', views.V_Agency_Setup, name='Agency_Setup'),
]

