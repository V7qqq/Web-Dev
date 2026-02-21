import { Component } from '@angular/core';
import { Product } from '../../../interface/product.model';
import { ProductCard } from '../../components/product-card/product-card';
import { ProductsService } from '../../products';
import { Header } from '../../components/header/header';

@Component({
  selector: 'app-likes',
  imports: [
    ProductCard,
    Header
  ],
  templateUrl: './likes.html',
  styleUrl: './likes.css',
})
export class Likes {
  likes: Product[] = [];
  constructor(private likesService: ProductsService) {
    this.likes = likesService.get();
  }


}
