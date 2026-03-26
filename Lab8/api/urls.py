from django.urls import path
from .views import category_list, category_detail, products_category, product_detail, products_list

urlpatterns = [
    path('products/',products_list),
    path('products/<int:id>/', product_detail),
    path('categories/', category_list),
    path('categories/<int:id>/',category_detail),
    path('categories/<int:id>/products/', products_category)


]