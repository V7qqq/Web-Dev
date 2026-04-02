from rest_framework.views import APIView
from rest_framework.response import Response
from api.models import Product
from api.serializer import ProductSerializer
from rest_framework import status, mixins
from rest_framework import generics, permissions



class ProductListAPIView(mixins.ListModelMixin,mixins.CreateModelMixin,generics.GenericAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    def get(self,request, *args, **kwagrs):
        return self.list(request, *args, **kwagrs)
    
    def post(self,request,*args,**kwargs):
        return self.create(request, *args, **kwargs)
    
class ProductDetailAPIView(mixins.RetrieveModelMixin,mixins.UpdateModelMixin,mixins.DestroyModelMixin,generics.GenericAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    lookup_url_kwarg = 'product_id'

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def patch(self, request, *args, **kwargs):
        return self.partial_update(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)

