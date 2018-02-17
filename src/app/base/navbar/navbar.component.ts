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

  constructor(
    private _userService: UserService,
    private _modalService: ModalService,
    private _ms: MainService
  ) { }

  ngOnInit() {
  }

  // openConfirmModal() {
  //   this._modalService.openModal
  // }

  // closeConfirmModal() {
  //   this._modalService.closeModal
  // }

}
