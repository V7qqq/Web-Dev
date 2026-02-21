import { Component } from '@angular/core';
import {ProductCard} from '../product-card/product-card';
import {Product} from '../../../interface/product.model';
import {ProductsService} from '../../products';

@Component({
  selector: 'app-product-list',
  imports: [
    ProductCard
  ],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  products : Product[];
  constructor(public productsService: ProductsService) {
    this.products = this.productsService.get();
  }

}
