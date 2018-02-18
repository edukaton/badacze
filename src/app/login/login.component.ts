import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { UserService } from '../user/user.service'
import { MainService } from '../shared/main.service'

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  userName: string;
  userType: string;
  loginInput: string;

  logo: string = ""

  userTypes = [
    {
      name: "nauczyciel",
      value: true
    },
    {
      name: "uczeń",
      value: false
    }
  ]
  constructor(
    private _userService: UserService,
    private _ms: MainService,
    private _router: Router

  ) { }

  ngOnInit() {
    this.logo = this._ms.logo
  }

  logInAs(admin) {
    this._userService.createUser(this._ms.users.length, this.userName, admin, true)
    this._userService.clearLastUser()
    if(admin) {
      this.goTo('alltasks')
    } else {
      this.goTo('intro')
    }

  }

  goTo(route:string) {
    this._router.navigate([route]);
  }

  adminLogIn(admin) {
    if(admin) {
      this._ms.admin = admin
    } else {
      this._ms.admin = !admin
    }

  }

}
