from django.shortcuts import render


def Login(request):
    return render(request,'Login.html')

def Register(request):
    return render(request,'Register.html')

def Forget_Password(request):
    return render(request,'Forget-Password.html')

def Verify_Otp(request):
    return render(request,'Verify-Otp.html')

def Change_Password(request):
    return render(request,'Change-Password.html')

def Agency_Setup(request):
    return render(request,'Agency-Setup.html')
