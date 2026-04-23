from django.shortcuts import render


def login(request):
    return render(request,'login.html')

def signup(request):
    return render(request,'signup.html')

def forget_password(request):
    return render(request,'forget-password.html')

def verify_otp(request):
    return render(request,'verify-otp.html')

def change_password(request):
    return render(request,'change-password.html')

