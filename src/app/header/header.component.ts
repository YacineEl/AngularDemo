import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  collapsed = true;
  page: string = 'Recipe';
  @Output() pageToDisplay = new EventEmitter<{ page: string }>();

  switchToRecipe() {
    this.page = 'Recipe';
    this.pageToDisplay.emit({ page: this.page });
  }

  switchToShopping() {
    this.page = 'Shopping';
    this.pageToDisplay.emit({ page: this.page });
  }
}
