import { Component, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent {
  recipes: Recipe[] = [];
  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() {
    this.recipes.push(
      new Recipe(
        'Test Recipe',
        'Test Recipe Description',
        'https://www.inspiredtaste.net/wp-content/uploads/2023/09/Easy-Pasta-Salad-Video.jpg'
      )
    );
    this.recipes.push(
      new Recipe(
        'Test Recipe The II',
        'Test Recipe Description The II',
        'https://www.allrecipes.com/thmb/NIBiRRdpD5FmBpaIE1HBvkUdeIY=/532x368/filters:no_upscale():max_bytes(150000):strip_icc():focal(2060x1373:2062x1375)/AR_RR_InstantPotBolognese_STILLSDSC07203-4x3-d29912d240184b409416d691e314284b.jpg'
      )
    );
    this.recipes.push(
      new Recipe(
        'Test Recipe The III',
        'Test Recipe Description The III',
        'https://www.shutterstock.com/shutterstock/photos/753380965/display_1500/stock-photo-avocado-quinoa-roasted-sweet-potato-spinach-and-chickpeas-salad-in-black-bowl-top-view-copy-753380965.jpg'
      )
    );
  }

  recipeToSend(event: Recipe) {
    this.recipeSelected.emit(event);
  }
}
