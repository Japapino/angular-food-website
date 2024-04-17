import { Injectable } from '@angular/core';
import { food } from '../../shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():food[]{
    return [
      {
        id: 1,
        name: 'Pizza',
        price: 5,
        tags: ['Fast Food', 'Italian'],
        favorite: true,
        stars: 4,
        imageUrl: '/assets/images/foods/food-1.jpg',
        origins: ['Italy'],
        cooktime: '30 minutes'
      },
      {
        id: 2,
        name: 'Burger',
        price: 3,
        tags: ['Fast Food', 'American'],
        favorite: false,
        stars: 3,
        imageUrl: '/assets/images/foods/food-2.jpeg',
        origins: ['USA'],
        cooktime: '20 minutes'
      },
      {
        id: 3,
        name: 'Sushi',
        price: 8,
        tags: ['Japanese'],
        favorite: true,
        stars: 5,
        imageUrl: '/assets/images/foods/food-3.png',
        origins: ['Japan'],
        cooktime: '40 minutes'
      },
      {
        id: 4,
        name: 'Pasta',
        price: 6,
        tags: ['Italian'],
        favorite: false,
        stars: 4,
        imageUrl: '/assets/images/foods/food-4.png',
        origins: ['Italy'],
        cooktime: '25 minutes'
      },
      {
        id: 5,
        name: 'Tacos',
        price: 4,
        tags: ['Mexican'],
        favorite: true,
        stars: 4,
        imageUrl: '/assets/images/foods/food-5.png',
        origins: ['Mexico'],
        cooktime: '30 minutes'
      },
      {
        id: 6,
        name: 'Salad',
        price: 2,
        tags: ['Healthy'],
        favorite: false,
        stars: 3,
        imageUrl: '/assets/images/foods/food-6.png',
        origins: ['Greece'],
        cooktime: '10 minutes'
      }
    ]
  }
}
