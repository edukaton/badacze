import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { LoginComponent }      from './login/login.component';
import { TaskdetailsComponent }      from './taskdetails/taskdetails.component';
import { UserComponent }      from './user/user.component';

import { AuthService } from './shared/auth.service'

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
    // canActivate: [AuthService]
  },
  {
    path: 'task',
    component: TaskdetailsComponent
  },
  {
    path: 'user',
    component: UserComponent
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
