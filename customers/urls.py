from django.urls import path, include
from . import views
from accounts.views import custDashboard

urlpatterns = [
    path('', custDashboard, name='customer'),
    path('profile/', views.cprofile, name='cprofile'),
    path('my_orders/', views.my_orders, name='customer_my_orders'),
    path('order_detail/<int:order_number>/', views.order_detail, name='order_detail'),
]
