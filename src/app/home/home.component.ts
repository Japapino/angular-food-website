import { Component } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { food } from '../shared/models/food';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  foods:food[] = [];
  constructor(private foodService:FoodService) { }

  ngOnInit(): void {
    this.foods = this.foodService.getAll();
  }

}
