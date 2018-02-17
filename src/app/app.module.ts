import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

// components
import { AppComponent } from './app.component';
import { BaseComponent } from './base/base.component';

// services
import { MainService } from './shared/main.service';
import { NavbarComponent } from './base/navbar/navbar.component';
import { FooterComponent } from './base/footer/footer.component';
import { MainComponent } from './base/main/main.component'


@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    NavbarComponent,
    FooterComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    // HttpClientModule,
    HttpModule
  ],
  providers: [
    MainService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
