from rest_framework.views import APIView
from rest_framework.response import Response
from api.models import Product
from api.serializer import ProductSerializer
from rest_framework import status
from rest_framework import generics, permissions

class ProductListAPIView(APIView):
    def get(self, request):
        products = Product.objects.all()
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)
    def post(self, request):
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
    

class ProductDetailAPIView(APIView):

    def get_object(self, product_id):
        try:
            product = Product.objects.get(id=product_id)
            return product
        except Product.DoesNotExist:
            return Response(status= status.HTTP_404_NOT_FOUND)

    def get(self,request,product_id):
        product = self.get_object(product_id)
        serializer = ProductSerializer(product, many = False)
        return Response(serializer.data)
    def put(self,request,product_id):
        serializer = ProductSerializer(instance = product_id, data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status = status.HTTP_204_NO_CONTENT)
    def delete(self,request,product_id):
        product = self.get_object(product_id= product_id)
        product.delete()
        return Response(status = status.HTTP_204_NO_CONTENT)
