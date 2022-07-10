import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seo-text',
  templateUrl: './seo-text.component.html',
  styleUrls: ['./seo-text.component.css']
})
export class SeoTextComponent implements OnInit {

  constructor() { }

  seotext = "This is a placeholder text.";
  seotitle = "This is a placeholder text."
  ngOnInit(): void {
  }

}
