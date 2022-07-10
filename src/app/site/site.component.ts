import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})
export class SiteComponent implements OnInit {

  constructor(public _dataService: DataService) { }

  ngOnInit(): void {
  }

  isHomeSite() {
    if(this._dataService.isHomeSite) {
      return true;
    }
    return false;
  }

  isContactSite() {
    if(this._dataService.isContactSite) {
      return true;
    }
    return false;
  }

}
