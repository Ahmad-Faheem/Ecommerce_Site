from django.shortcuts import render


def V_Login(request):
    return render(request,'Vender/Login.html')

def V_Register(request):
    return render(request,'Vender/Register.html')

def V_Forget_Password(request):
    return render(request,'Vender/Forget-Password.html')

def V_Verify_Otp(request):
    return render(request,'Vender/Verify-Otp.html')

def V_Change_Password(request):
    return render(request,'Vender/Change-Password.html')

def V_Agency_Setup(request):
    return render(request,'Vender/Agency-Setup.html')
