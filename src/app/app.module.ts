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
import { UploadtasksolutionComponent } from './uploadtasksolution/uploadtasksolution.component';
import { DisplaytasksolutionComponent } from './displaytasksolution/displaytasksolution.component';
import { InitialstudentratingComponent } from './initialstudentrating/initialstudentrating.component';
import { FinalstudentratingComponent } from './finalstudentrating/finalstudentrating.component';

// services
import { MainService } from './shared/main.service';
import { UserService } from './user/user.service'
import { ModalService } from './shared/modal.service'
// import { AuthService } from './shared/auth.service'

// modules
import { AngularMaterialModule } from './angular-material.module';
import { TaskdetailsComponent } from './taskdetails/taskdetails.component';
import { AppRoutingModule } from './app-routing.module';
import { FokaGameComponent } from './foka-game/foka-game.component';
import { FokaGameSidebarComponent } from './foka-game/foka-game-sidebar/foka-game-sidebar.component';
import { MainSidebarComponent } from './base/main/main-sidebar/main-sidebar.component'


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
    FinalstudentratingComponent,
    FokaGameComponent,
    FokaGameSidebarComponent,
    MainSidebarComponent
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
