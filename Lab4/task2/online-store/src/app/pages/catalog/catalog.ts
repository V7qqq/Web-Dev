import {Component, forwardRef} from '@angular/core';
import {Header} from '../../components/header/header';
import {ProductList} from '../../components/product-list/product-list';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.html',
  styleUrl: './catalog.css',
  imports: [
    Header,
    forwardRef(() => ProductList)
  ]
})
export class Catalog {
}

