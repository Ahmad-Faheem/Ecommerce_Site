
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

def coming_soon(request):
    return render(request,'coming-soon.html')

