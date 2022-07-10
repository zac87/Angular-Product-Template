import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { ProductsComponent } from './products/products.component';
import { FooterComponent } from './footer/footer.component';
import { SeoTextComponent } from './seo-text/seo-text.component';
import { SiteComponent } from './site/site.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    ProductsComponent,
    FooterComponent,
    SeoTextComponent,
    SiteComponent,
    ContactComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
