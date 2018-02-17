import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule  } from '@angular/forms';

// components
import { AppComponent } from './app.component';
import { BaseComponent } from './base/base.component';
import { NavbarComponent } from './base/navbar/navbar.component';
import { FooterComponent } from './base/footer/footer.component';
import { MainComponent } from './base/main/main.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';

// services
import { MainService } from './shared/main.service';
import { UserService } from './user/user.service'
import { ModalService } from './shared/modal.service'

// modules
import { AngularMaterialModule } from './angular-material.module';
import { TaskdetailsComponent } from './taskdetails/taskdetails.component';
import { AppRoutingModule } from './app-routing.module'



@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    NavbarComponent,
    FooterComponent,
    MainComponent,
    LoginComponent,
    UserComponent,
    TaskdetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    AngularMaterialModule,
    AppRoutingModule
  ],
  providers: [
    MainService,
    UserService,
    ModalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
