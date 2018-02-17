import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  userType: string;

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
  constructor() { }

  ngOnInit() {
  }

}
