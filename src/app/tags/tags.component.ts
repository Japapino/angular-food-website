import { Component } from '@angular/core';
import { Tag } from '../shared/models/Tag';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from '../app.routes';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css'
})
export class TagsComponent {
  tags: Tag[] = [];

  constructor(private foodService:FoodService) {}

  ngOnInit(): void {
    this.tags = this.foodService.getAllTags();
  }

}
