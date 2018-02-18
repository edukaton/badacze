import { Injectable } from '@angular/core';
import { MainService } from '../shared/main.service';

@Injectable()
export class UserService {

  user: {
    id: number,
    name: string,
    admin: boolean,
    logged: boolean
  } = {
    id: undefined,
    name: "",
    admin: false,
    logged: false
  }

  constructor(
    private _ms: MainService
  ) {}

  createUser(id: number, name: string, admin: boolean, logged: boolean) {
    this.user.id = id;
    this.user.name = name;
    this.user.admin = admin;
    this.user.logged = logged;

    this._ms.users.push(this.user)
  }

  clearLastUser() {
    this.user = {
      id: undefined,
      name: "",
      admin: false,
      logged: false
    }
  }

  deleteUser(id: number) {
    console.log('user deleted')
  }

  toAdmin() {
    // this._ms.admin = true
  }

  toUser() {
    // this._ms.admin = false
  }

}
