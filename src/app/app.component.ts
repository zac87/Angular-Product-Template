import { Component } from '@angular/core';
import { DataService } from './data.service';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'product-show-case';
  

  constructor(public _dataService : DataService) { }

  isHomeSite() {
    if(this._dataService.getSiteClicked() == "home") {
      return true;
    } 
    return false;
  }

  isContactSite() {
    if(this._dataService.getSiteClicked() == "contact") {
      return true;
    } 
    return false;
  }
}
