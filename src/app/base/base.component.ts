import { Component, OnInit } from '@angular/core';
import { MainService } from '../shared/main.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.sass']
})
export class BaseComponent implements OnInit {

  data: any;

  constructor(
    private _main: MainService
  ) {
    // _main.mainData("res")
    this.data = _main.mainData("res")
    console.log(this.data);
    
  }

  ngOnInit() {
    // this.data = this._main.data

    // console.log(this._main.data);
    
    // this._main.log()

  }
}
