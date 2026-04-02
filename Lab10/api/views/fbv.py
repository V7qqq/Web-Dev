from django.shortcuts import render, get_object_or_404
from ..models import Product, Category
from django.http import JsonResponse
from rest_framework import viewsets
from api.serializer import ProductSerializer, CategorySerializer
from rest_framework.decorators import action, api_view
from rest_framework.response import Response
from rest_framework import status



@api_view(["GET","POST"])
def product_list(request):
    if request.method == "POST":
        serializer = ProductSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
    
    products = Product.objects.all()
    serializer = ProductSerializer(products, many = True)
    return Response(serializer.data)


@api_view(["GET","PUT","DELETE"])
def product_detail(request, product_id):
    try:
        product = Product.objects.get(id = product_id)
    except Product.DoesNotExist:
        return Response(status = status.HTTP_404_NOT_FOUND)
    
    if request.method == "PUT":
        serializer = ProductSerializer(instance = product_id, data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status = status.HTTP_204_NO_CONTENT)
        
    if request.method == "DELETE":
        product.delete()
        return Response(status = status.HTTP_204_NO_CONTENT)
    
    serializer = ProductSerializer(product,many = False)
    return Response(serializer.data)





