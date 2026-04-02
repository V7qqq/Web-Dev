"""
URL configuration for shop_back project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/6.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from api import views







urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/products/', views.ProductListAPIView.as_view(), name='product-list'),
    path('api/products/<int:product_id>/', views.ProductDetailAPIView.as_view(), name='product-detail'),
    path('api/category/', views.CategoryListAPIView.as_view(), name='category-view'),
    path('api/category/<int:category_id>',views.CategoryDetailAPIView.as_view(),name = 'category-detail'),
    path('api/category/<int:category_id>/product',view = views.CategoryProductsAPIView.as_view(),name = 'category-po-products'),
    path("api/products/",views.product_list,name = "product-list"),
    path("api/products/<int:product_id>/",views.product_detail,name = "product-list"),
    
    
]
