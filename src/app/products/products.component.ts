import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
  title = "Test";
  text = "This is a placeholder text."

  constructor() {

   }


  ngOnInit(): void {
  }

}
