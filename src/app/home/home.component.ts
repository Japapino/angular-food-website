import { Component } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Food } from '../shared/models/food';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SearchComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  foods:Food[] = [];
  constructor(private foodService:FoodService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params['searchTerm']){
        this.foods = this.foodService.getAll().filter(food => 
          food.name.toLowerCase().includes(params['searchTerm'].toLowerCase()));
      } else if(params['tag']) {
        this.foods = this.foodService.getAllFoodsByTag(params['tag']);
        } else {
        this.foods = this.foodService.getAll(); 
      }
    })

  }

}
