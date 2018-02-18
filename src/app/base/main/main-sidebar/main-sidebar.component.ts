import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-sidebar',
  templateUrl: './main-sidebar.component.html',
  styleUrls: ['./main-sidebar.component.sass']
})
export class MainSidebarComponent implements OnInit {

  navigation = [
    {
      name: 'name'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
