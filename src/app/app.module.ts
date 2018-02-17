import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule  } from '@angular/forms';

// components
import { AppComponent } from './app.component';
import { BaseComponent } from './base/base.component';

// services
import { MainService } from './shared/main.service';
import { NavbarComponent } from './base/navbar/navbar.component';
import { FooterComponent } from './base/footer/footer.component';
import { MainComponent } from './base/main/main.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';


// modules
import { AngularMaterialModule } from './/angular-material.module';
import { TaskdetailsComponent } from './taskdetails/taskdetails.component';
import { UploadtasksolutionComponent } from './uploadtasksolution/uploadtasksolution.component';
import { DisplaytasksolutionComponent } from './displaytasksolution/displaytasksolution.component';
import { InitialstudentratingComponent } from './initialstudentrating/initialstudentrating.component';
import { FinalstudentratingComponent } from './finalstudentrating/finalstudentrating.component';
// import { AppRoutingModule } from './/app-routing.module'


@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    NavbarComponent,
    FooterComponent,
    MainComponent,
    LoginComponent,
    UserComponent,
    TaskdetailsComponent,
    UploadtasksolutionComponent,
    DisplaytasksolutionComponent,
    InitialstudentratingComponent,
    FinalstudentratingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // HttpClientModule,
    HttpModule,
    FormsModule,
    AngularMaterialModule,
    // NgModel
    // AppRoutingModule
  ],
  providers: [
    MainService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
