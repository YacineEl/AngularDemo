import { Component, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrl: './shopping-list-edit.component.css'
})
export class ShoppingListEditComponent {

  ingredient: Ingredient;
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('quantityInput') quantityInput: ElementRef;

  @Output() addIngredient: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();
  @Output() removeIngredient: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();

  addNewIngredient(){
    this.ingredient = new Ingredient(
      this.nameInput.nativeElement.value,
      this.quantityInput.nativeElement.value);
    this.addIngredient.emit(this.ingredient);
  }
  removeOldIngredient(){
    this.ingredient = new Ingredient(
      this.nameInput.nativeElement.value,
      this.quantityInput.nativeElement.value);
    this.removeIngredient.emit(this.ingredient);
  }
}
