from django.shortcuts import render, get_object_or_404
from .models import Product, Category
from django.http import JsonResponse
from rest_framework import viewsets
from api.serializer import ProductSerializer, CategorySerializer
from rest_framework.decorators import action
from rest_framework.response import Response



class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    @action(detail = True, methods = ["get"], name = "products")
    def products(self, request, pk):
        products = Product.objects.filter(category = pk)
        serializer = ProductSerializer(products, many = True)
        return Response (serializer.data)   


