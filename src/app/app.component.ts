import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ShoppingAppBasics';
  pageToDisplay : string = 'Recipe';

  switchPage(event : {page: string}){
    console.log(event.page);
    this.pageToDisplay = event.page;
  }
}
