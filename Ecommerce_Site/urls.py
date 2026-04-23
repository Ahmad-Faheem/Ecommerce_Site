
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from . import views

urlpatterns = [
    path('', views.base, name='base'),
    path('home/', views.home, name='home'),
    path('about/', views.about, name='about'),
    path('contact/', views.contact, name='contact'),

    path('not-found/', views.not_found, name='not_found'),
    path('coming-soon/', views.coming_soon, name='coming_soon'),
    
    path('Admin/',include('Admin.urls')),
    path('User/',include('User.urls')),
    path('Vender/',include('Vender.urls')),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
