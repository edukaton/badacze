import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { LoginComponent }      from './login/login.component';
import { TaskdetailsComponent }      from './taskdetails/taskdetails.component';
import { UserComponent }      from './user/user.component';
import { MainComponent } from './base/main/main.component';

import { FokaGameComponent } from './foka-game/foka-game.component'
import { AuthService } from './shared/auth.service'

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthService]
  },
  {
    path: 'intro',
    component: FokaGameComponent,
    canActivate: [AuthService]
  },
  {
    path: 'task/:id',
    component: TaskdetailsComponent
  },
  {
    path: 'user',
    component: UserComponent
  },
    {
    path: 'alltasks',
    component: MainComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [
    AuthService
  ]
})
export class AppRoutingModule {}
