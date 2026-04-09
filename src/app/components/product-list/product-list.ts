import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';
import {ProductCard} from '../product-card/product-card';
import {Product} from '../../../interface/product.model';

@Component({
  selector: 'app-product-list',
  imports: [
    NgForOf,
    ProductCard
  ],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  products: Product[] = [
    {
      id: 1,
      name: "Стилус",
      description: "Стилус Universal Stylus pen белый",
      price: 1742,
      rating: 4.8,
      image: "https://resources.cdn-kaspi.kz/img/m/p/h9d/hf0/85178507558942.png?format=gallery-medium",
      images: [],
      link: "https://kaspi.kz/shop/p/stilus-universal-stylus-pen-belyi-116657633/?c=750000000"
    },
    {
      id: 2,
      name: "губка Максима",
      description: "Фрекен Бок губка Максима 6 шт, поролон",
      price: 664,
      rating: 5.0,
      image: "https://resources.cdn-kaspi.kz/img/m/p/pbd/p48/25310066.jpg?format=gallery-medium",
      images: [],
      link: "https://kaspi.kz/shop/p/freken-bok-gubka-maksima-6-sht-porolon-101191540/?c=750000000"
    },
    {
      id: 3,
      name: "морковь",
      description: "MAGNUM морковь отборная Казахстан",
      price: 329,
      rating: 4.9,
      image: "https://resources.cdn-kaspi.kz/img/m/p/hb3/h05/64231629357086.jpg?format=gallery-medium",
      images: [],
      link: "https://kaspi.kz/shop/p/magnum-morkov-otbornaja-kazahstan-106203164/?c=750000000"
    },
    {
      id: 4,
      name: "морковь",
      description: "MAGNUM морковь немытая в сетке Казахстан ",
      price: 1275,
      rating: 4.9,
      image: "https://resources.cdn-kaspi.kz/img/m/p/hb2/h0e/64377443614750.jpg?format=gallery-medium",
      images: [],
      link: "https://kaspi.kz/shop/p/magnum-morkov-nemytaja-v-setke-kazahstan-102726840/?c=750000000"
    },
    {
      id: 5,
      name: "морковь",
      description: "MAGNUM морковь желтая Узбекистан",
      price: 375,
      rating: 4.9,
      image: "https://resources.cdn-kaspi.kz/img/m/p/hbf/hc1/64695267000350.jpg?format=gallery-medium",
      images: [],
      link: "https://kaspi.kz/shop/p/magnum-morkov-zheltaja-uzbekistan-103187070/?c=750000000"
    },
    {
      id: 6,
      name: "Ручка Obama",
      description: "Ручка шариковая Obama OB-12345 1 шт, 0.7 мм, цвет чернил синий",
      price: 10,
      rating: 5,
      image: "https://resources.cdn-kaspi.kz/img/m/p/p14/p5b/25040430.png?format=gallery-medium",
      images: [],
      link: "https://kaspi.kz/shop/p/ruchka-sharikovaja-obama-ob-12345-1-sht-0-7-mm-tsvet-chernil-sinii-106183439/?c=750000000"
    },
    {
      id: 7,
      name: "Ручка Maxriter",
      description: "Ручка шариковая Cello Maxriter XS 1 шт, 0.7 мм, цвет чернил синий",
      price: 35,
      rating: 4.9,
      image: "https://resources.cdn-kaspi.kz/img/m/p/p54/p02/30379357.jpg?format=gallery-medium",
      images: [],
      link: "https://kaspi.kz/shop/p/ruchka-sharikovaja-cello-maxriter-xs-1-sht-0-7-mm-tsvet-chernil-sinii-100369607/?c=750000000"
    },
    {
      id: 8,
      name: "крем-спрей",
      description: "Ollin Professional Perfect Hair 15 в 1 крем-спрей 250 мл",
      price: 2999,
      rating: 4.9,
      image: "https://resources.cdn-kaspi.kz/img/m/p/p3c/pb5/21586295.jpg?format=gallery-medium",
      images: [],
      link: "https://kaspi.kz/shop/p/ollin-professional-perfect-hair-15-v-1-krem-sprei-250-ml-100008645/?c=750000000"
    },
    {
      id: 9,
      name: "Смартфон Realme",
      description: "Смартфон Realme C71 8 ГБ/256 ГБ зеленый",
      price: 92990,
      rating: 4.9,
      image: "https://resources.cdn-kaspi.kz/img/m/p/p03/pc1/57994064.png?format=gallery-medium",
      images: [],
      link: "https://kaspi.kz/shop/p/realme-c71-8-gb-256-gb-zelenyi-140029812/?c=750000000"
    },
    {
      id: 10,
      name: "кока кола",
      description: "Coca-Cola газированный напиток кола 1 л",
      price: 665,
      rating: 4.9,
      image: "https://resources.cdn-kaspi.kz/img/m/p/h39/h36/85448954707998.png?format=gallery-medium",
      images: [],
      link: "https://kaspi.kz/shop/p/coca-cola-classic-gazirovannyi-napitok-1-l-100208096/?c=750000000"
    },
    {
      id: 11,
      name: "текила",
      description: "Текила Olmeca silver 35% 1 л",
      price: 12342,
      rating: 5.0,
      image: "https://resources.cdn-kaspi.kz/img/m/p/h34/h5b/86236276457502.jpg?format=gallery-medium",
      images: [],
      link: "https://kaspi.kz/shop/p/tekila-olmeca-silver-35-1-l-113376363/?c=750000000"
    }
  ];
}
