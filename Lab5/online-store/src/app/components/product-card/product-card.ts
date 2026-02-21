import {Component, EventEmitter, input, Input, Output} from '@angular/core';
import {Product} from '../../../interface/product.model';



@Component({
  selector: 'app-product-card',
  imports: [],

  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  @Input({required:true}) product!:Product;
  encode(value:string):string{
    return encodeURIComponent(value);
  }

  get whatsAppUrl(): string{
    const text = `Check out this product: ${this.product.link}`;
    return `https://wa.me/?text=${this.encode(text)}`;
  }

  get telegAppUrl(): string{
    const text = `${this.product.link}&text=${this.product.description}`;
    return `https://t.me/share/url?url=${this.encode(text)}`
  }

  onLike(){
    this.product.liked = !this.product.liked;

  }



}
