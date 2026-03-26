from django.shortcuts import render, get_object_or_404
from .models import Product, Category
from django.http import JsonResponse
def category_list(request):
    categories = Category.objects.all()
    return JsonResponse([c.json() for c in categories],safe = False)
def category_detail(request, id):
    category = get_object_or_404(Category, id=id)
    return JsonResponse(category.json())
def products_list(request):
    products = Product.objects.all()
    return JsonResponse([p.json() for p in products], safe = False)
def product_detail(request,id):
    products =get_object_or_404(Product, id=id)
    return JsonResponse(products.json())
def products_category(request,id):
    category = get_object_or_404(Category,id=id)
    products = Product.objects.filter(category = category)
    return JsonResponse([p.json() for p in products], safe=False)