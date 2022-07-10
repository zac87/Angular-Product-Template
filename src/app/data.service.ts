import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  isHomeSite = true;
  isContactSite = false;

  ngOnInit() {
  }

  getSiteClicked(): string {
    if(this.isHomeSite) {
      return "home";
    } else if(this.isContactSite) {
      return "contact";
    }
    return "home";
  }
  
  setSiteClicked(name: string) {
    if(name == "home") {
      this.isHomeSite = true;
      this.isContactSite = false;      
    } else if(name == "contact") {
      this.isContactSite = true;
      this.isHomeSite = false;
    }
  }

  constructor() {}
}
