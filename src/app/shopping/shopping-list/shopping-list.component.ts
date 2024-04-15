import { Component } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [];

  constructor() {
    this.ingredients = [
      new Ingredient('Eggs', 2),
      new Ingredient('Milk', 1),
      new Ingredient('Bread', 1),
      new Ingredient('Butter', 1),
      new Ingredient('Sugar', 1)
    ];
  }
}
