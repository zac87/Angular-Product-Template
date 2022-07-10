import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public _dataService : DataService) { }

  ngOnInit(): void {
  }

  getHomeSite() {
    this._dataService.setSiteClicked("home");
  }

  getContactSite() {
    this._dataService.setSiteClicked("contact");
  }
}
