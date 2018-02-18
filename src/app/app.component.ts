import { Component, OnInit } from '@angular/core';

import { MainService } from './shared/main.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(
    private_ms: MainService
  ) {
  }
  ngOnInit() {

  }
}
