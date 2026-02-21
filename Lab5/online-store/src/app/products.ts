import { Injectable } from '@angular/core';
import { Product } from '../interface/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  public SelectedCategory: string = '';
  private products: Product[] = [
    {
      id: 1,
      name: "Стилус",
      description: "Стилус Universal Stylus pen белый",
      price: 1742,
      rating: 4.8,
      image: "https://resources.cdn-kaspi.kz/img/m/p/h9d/hf0/85178507558942.png?format=gallery-medium",
      images: [],
      link: "https://kaspi.kz/shop/p/stilus-universal-stylus-pen-belyi-116657633/",
      liked: false,
      category: "Электроника"
    },
    {
      id: 2,
      name: "Губка Максима",
      description: "Фрекен Бок губка Максима 6 шт, поролон",
      price: 664,
      rating: 5.0,
      image: "https://resources.cdn-kaspi.kz/img/m/p/pbd/p48/25310066.jpg?format=gallery-medium",
      images: [],
      link: "https://kaspi.kz/shop/p/freken-bok-gubka-maksima-6-sht-porolon-101191540/",
      liked: false,
      category: "Для дома"
    },
    {
      id: 3,
      name: "Морковь",
      description: "MAGNUM морковь отборная Казахстан",
      price: 329,
      rating: 4.9,
      image: "https://resources.cdn-kaspi.kz/img/m/p/hb3/h05/64231629357086.jpg?format=gallery-medium",
      images: [],
      link: "https://kaspi.kz/shop/p/magnum-morkov-otbornaja-kazahstan-106203164/",
      liked: false,
      category: "Продукты"
    },
    {
      id: 4,
      name: "Морковь в сетке",
      description: "MAGNUM морковь немытая в сетке Казахстан ",
      price: 1275,
      rating: 4.9,
      image: "https://resources.cdn-kaspi.kz/img/m/p/hb2/h0e/64377443614750.jpg?format=gallery-medium",
      images: [],
      link: "https://kaspi.kz/shop/p/magnum-morkov-nemytaja-v-setke-kazahstan-102726840/",
      liked: false,
      category: "Продукты"
    },
    {
      id: 5,
      name: "Морковь желтая",
      description: "MAGNUM морковь желтая Узбекистан",
      price: 375,
      rating: 4.9,
      image: "https://resources.cdn-kaspi.kz/img/m/p/hbf/hc1/64695267000350.jpg?format=gallery-medium",
      images: [],
      link: "https://kaspi.kz/shop/p/magnum-morkov-zheltaja-uzbekistan-103187070/",
      liked: false,
      category: "Продукты"
    },
    {
      id: 6,
      name: "Ручка Obama",
      description: "Ручка шариковая Obama OB-12345 1 шт, 0.7 мм, синий",
      price: 10,
      rating: 5,
      image: "https://resources.cdn-kaspi.kz/img/m/p/p14/p5b/25040430.png?format=gallery-medium",
      images: [],
      link: "https://kaspi.kz/shop/p/ruchka-sharikovaja-obama-ob-12345-1-sht-0-7-mm-tsvet-chernil-sinii-106183439/",
      liked: false,
      category: "Канцелярия"
    },
    {
      id: 7,
      name: "Ручка Maxriter",
      description: "Ручка шариковая Cello Maxriter XS 1 шт, 0.7 мм, синий",
      price: 35,
      rating: 4.9,
      image: "https://resources.cdn-kaspi.kz/img/m/p/p54/p02/30379357.jpg?format=gallery-medium",
      images: [],
      link: "https://kaspi.kz/shop/p/ruchka-sharikovaja-cello-maxriter-xs-1-sht-0-7-mm-tsvet-chernil-sinii-100369607/",
      liked: false,
      category: "Канцелярия"
    },
    {
      id: 8,
      name: "Крем-спрей Ollin",
      description: "Ollin Professional Perfect Hair 15 в 1 250 мл",
      price: 2999,
      rating: 4.9,
      image: "https://resources.cdn-kaspi.kz/img/m/p/p3c/pb5/21586295.jpg?format=gallery-medium",
      images: [],
      link: "https://kaspi.kz/shop/p/ollin-professional-perfect-hair-15-v-1-krem-sprei-250-ml-100008645/",
      liked: false,
      category: "Красота"
    },
    {
      id: 9,
      name: "Смартфон Realme",
      description: "Смартфон Realme C71 8 ГБ/256 ГБ зеленый",
      price: 92990,
      rating: 4.9,
      image: "https://resources.cdn-kaspi.kz/img/m/p/p03/pc1/57994064.png?format=gallery-medium",
      images: [],
      link: "https://kaspi.kz/shop/p/realme-c71-8-gb-256-gb-zelenyi-140029812/",
      liked: false,
      category: "Электроника"
    },
    {
      id: 10,
      name: "Кока-кола",
      description: "Coca-Cola газированный напиток кола 1 л",
      price: 665,
      rating: 4.9,
      image: "https://resources.cdn-kaspi.kz/img/m/p/h39/h36/85448954707998.png?format=gallery-medium",
      images: [],
      link: "https://kaspi.kz/shop/p/coca-cola-classic-gazirovannyi-napitok-1-l-100208096/",
      liked: false,
      category: "Продукты"
    },
    {
      id: 11,
      name: "Текила Olmeca",
      description: "Текила Olmeca silver 35% 1 л",
      price: 12342,
      rating: 5.0,
      image: "https://resources.cdn-kaspi.kz/img/m/p/h34/h5b/86236276457502.jpg?format=gallery-medium",
      images: [],
      link: "https://kaspi.kz/shop/p/tekila-olmeca-silver-35-1-l-113376363/",
      liked: false,
      category: "Продукты"
    },
    {
      id: 12,
      name: "Apple iPhone 15",
      description: "Смартфон Apple iPhone 15 128Gb черный",
      price: 365000,
      rating: 4.9,
      image: "https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-medium",
      images: [],
      link: "https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7iFRijhNzeThWM6iLwY-UgTN&gclid=CjwKCAiAzOXMBhASEiwAe14SaU4PYs_nPyuYD2ud4rsRQzqAdCKduB1Hg5KeifJ6UCW1gYfn_UqKRBoC7dYQAvD_BwE",
      liked: false,
      category: "Электроника"
    },
    {
      id: 13,
      name: "Мышь Logitech",
      description: "Мышь Logitech G102 Lightsync черный",
      price: 11500,
      rating: 4.8,
      image: "https://resources.cdn-kaspi.kz/img/m/p/hb2/hc2/64119540187166.jpg?format=gallery-medium",
      images: [],
      link: "https://kaspi.kz/shop/p/logitech-g102-lightsync-chernyi-100956618/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7iFRijhNzeThWM6iLwY-UgTN&gclid=CjwKCAiAzOXMBhASEiwAe14SaU4PYs_nPyuYD2ud4rsRQzqAdCKduB1Hg5KeifJ6UCW1gYfn_UqKRBoC7dYQAvD_BwE",
      liked: false,
      category: "Электроника"
    },
    {
      id: 14,
      name: "Шоколад Albeni",
      description: "Шоколадный батончик Ulker Albeni 40 г",
      price: 215,
      rating: 5.0,
      image: "https://resources.cdn-kaspi.kz/img/m/p/h9f/hb8/85711928360990.jpg?format=gallery-medium",
      images: [],
      link: "https://kaspi.kz/shop/p/albeni-shokoladnyi-batonchik-molochnyi-40-g-100222662/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7iFRijhNzeThWM6iLwY-UgTN&gclid=CjwKCAiAzOXMBhASEiwAe14SaU4PYs_nPyuYD2ud4rsRQzqAdCKduB1Hg5KeifJ6UCW1gYfn_UqKRBoC7dYQAvD_BwE",
      liked: false,
      category: "Продукты"
    },
    {
      id: 15,
      name: "Бумага A4",
      description: "Бумага SvetoCopy A4 500 листов",
      price: 1950,
      rating: 4.9,
      image: "https://resources.cdn-kaspi.kz/img/m/p/p22/p3e/48591647.jpg?format=gallery-medium",
      images: [],
      link: "https://kaspi.kz/shop/p/sv4-44-5-bumaga-a4-500-sht-matovoe-pokrytie-108810207/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7iFRijhNzeThWM6iLwY-UgTN&gclid=CjwKCAiAzOXMBhASEiwAe14SaU4PYs_nPyuYD2ud4rsRQzqAdCKduB1Hg5KeifJ6UCW1gYfn_UqKRBoC7dYQAvD_BwE",
      liked: false,
      category: "Канцелярия"
    },
    {
      id: 16,
      name: "Наушники AirPods 3",
      description: "Наушники Apple AirPods 3 белый",
      price: 85000,
      rating: 4.9,
      image: "https://resources.cdn-kaspi.kz/img/m/p/h31/hd7/64362668556318.jpg?format=gallery-medium",
      images: [],
      link: "https://kaspi.kz/shop/p/naushniki-apple-airpods-3-with-lightning-charging-case-belyi-106667987/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7iFRijhNzeThWM6iLwY-UgTN&gclid=CjwKCAiAzOXMBhASEiwAe14SaU4PYs_nPyuYD2ud4rsRQzqAdCKduB1Hg5KeifJ6UCW1gYfn_UqKRBoC7dYQAvD_BwE",
      liked: false,
      category: "Электроника"
    },
    {
      id: 17,
      name: "Чай Greenfield",
      description: "Чай черный Greenfield Golden Ceylon 25 пакетиков",
      price: 845,
      rating: 4.9,
      image: "https://resources.cdn-kaspi.kz/img/m/p/h5d/h1a/86509973340190.jpg?format=gallery-medium",
      images: [],
      link: "https://kaspi.kz/shop/p/chai-greenfield-chernyi-golden-ceylon-listovoi-25-paketikov-100210839/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7iFRijhNzeThWM6iLwY-UgTN&gclid=CjwKCAiAzOXMBhASEiwAe14SaU4PYs_nPyuYD2ud4rsRQzqAdCKduB1Hg5KeifJ6UCW1gYfn_UqKRBoC7dYQAvD_BwE",
      liked: false,
      category: "Продукты"
    },
    {
      id: 18,
      name: "Зубная паста",
      description: "Зубная паста Colgate Тотал 12 Чистая Мята 150 мл",
      price: 1100,
      rating: 4.8,
      image: "https://resources.cdn-kaspi.kz/img/m/p/p5a/p59/110831838.jpg?format=gallery-medium",
      images: [],
      link: "https://kaspi.kz/shop/p/colgate-zubnaja-pasta-troinoe-deistvie-natural-naja-mjata-150-ml-101004574/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7iFRijhNzeThWM6iLwY-UgTN&gclid=CjwKCAiAzOXMBhASEiwAe14SaU4PYs_nPyuYD2ud4rsRQzqAdCKduB1Hg5KeifJ6UCW1gYfn_UqKRBoC7dYQAvD_BwE",
      liked: false,
      category: "Красота"
    },
    {
      id: 19,
      name: "Маркеры",
      description: "Набор маркеров для скетчинга 48 цветов",
      price: 2450,
      rating: 4.7,
      image: "https://resources.cdn-kaspi.kz/img/m/p/p2f/p54/7905136.png?format=gallery-medium",
      images: [],
      link: "https://kaspi.kz/shop/p/marker-guangna-akrilovyi-gn-8101-12-12-sht-1-mm-raznotsvetnyi-123536039/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7iFRijhNzeThWM6iLwY-UgTN&gclid=CjwKCAiAzOXMBhASEiwAe14SaU4PYs_nPyuYD2ud4rsRQzqAdCKduB1Hg5KeifJ6UCW1gYfn_UqKRBoC7dYQAvD_BwE",
      liked: false,
      category: "Канцелярия"
    },
    {
      id: 20,
      name: "Масло подсолнечное",
      description: "Масло Шедевр подсолнечное 1 л",
      price: 780,
      rating: 4.9,
      image: "https://resources.cdn-kaspi.kz/img/m/p/hd4/h28/63754527670302.jpg?format=gallery-medium",
      images: [],
      link: "https://kaspi.kz/shop/p/rastitel-noe-maslo-maslozavod-1-podsolnechnoe-rafinirovannoe-1-l-101000406/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7iFRijhNzeThWM6iLwY-UgTN&gclid=CjwKCAiAzOXMBhASEiwAe14SaU4PYs_nPyuYD2ud4rsRQzqAdCKduB1Hg5KeifJ6UCW1gYfn_UqKRBoC7dYQAvD_BwE",
      liked: false,
      category: "Продукты"
    }
  ];

  get(): Product[] {
    return this.products;
  }


}
