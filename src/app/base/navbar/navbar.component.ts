import { Component, OnInit } from '@angular/core';
import { MainService } from '../../shared/main.service';
import { ModalService } from '../../shared/modal.service'
import { UserService } from '../../user/user.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  isAdmin;
  subscribeUser

  constructor(
    private _userService: UserService,
    private _modalService: ModalService,
    private _ms: MainService

  ) {
    this.subscribeUser = this._ms.getAdmin().subscribe(d => { this.isAdmin = d; });
  }

  user:any[]


  ngOnInit() {
    console.log(this.isAdmin)
    // if(this._ms.admin){
    //   this.activeUser = "teacher"
    // } else {
    //   this.activeUser = "student"
    // }

  }

  openConfirmModal() {
    // this._modalService.openModal

    // this._ms.users.active
  }

  changeUserToAdmin() {
    // this._ms.admin = true
    console.log("toadmin")
  }

  changeToUser() {
    // this._ms.admin = false
  }


  // closeConfirmModal() {
  //   this._modalService.closeModal
  // }

}
