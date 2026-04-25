from django.shortcuts import render


def login(request):
    return render(request,'User/login.html')

def signup(request):
    return render(request,'User/signup.html')

def forget_password(request):
    return render(request,'User/forget-password.html')

def verify_otp(request):
    return render(request,'User/verify-otp.html')

def change_password(request):
    return render(request,'User/change-password.html')

