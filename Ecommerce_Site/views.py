
from django.shortcuts import render

def base(request):
    return render(request,'base.html')

def home(request):
    return render(request,'home.html')

def about(request):
    return render(request,'about.html')

def contact(request):
    return render(request,'contact.html')






def not_found(request):
    return render(request,'not-found.html')

def comming_soon(request):
    return render(request,'comming-soon.html')





# Login Functions : 

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

