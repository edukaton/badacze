import { Injectable }     from '@angular/core';
import { CanActivate }    from '@angular/router';
import { MainService } from './main.service';

@Injectable()
export class AuthService implements CanActivate {

  users: any[] = [];

  constructor(
    private _ms: MainService
  ) {
    this.users = _ms.users
  }

  canActivate() {
    let bool: boolean
    console.log(this.users)
    if(this.users.length > 0) {
      this.users.forEach(v => {
        if(v.admin) {
          bool = false
        } else {
          bool = true
        }
        if(v.logged) {
          bool = false
        } else {
          bool = true
        }
      });
    } else {
      bool = true
    }
    return bool;
  }
}
