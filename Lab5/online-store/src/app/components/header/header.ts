import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../../../interface/product.model';
import { ProductsService } from '../../products';


@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
  standalone: true,

})
export class Header {

  categories: Product[] = []
  constructor(private category: ProductsService) {
   this.categories = category.get();
  }
  onlycategory: string[] = [];

  ngOnInit(){

    const allItems = this.categories.map(item => item.category);
    this.onlycategory = [...new Set(allItems)];

  }

    public onCategoryChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.category.SelectedCategory = selectElement.value;
  }
}
