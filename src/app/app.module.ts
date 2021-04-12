import {HomeComponent} from './pages/home/home.component';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PagesComponent } from './pages/pages.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { HeaderSocialsComponent } from './shared/components/header-socials.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PagesComponent,
    FooterComponent,
    HeaderComponent,
    HeaderSocialsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
