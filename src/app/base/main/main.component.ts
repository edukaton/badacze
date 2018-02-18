import { Component, OnInit } from '@angular/core';
import { MainService } from '../../shared/main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

  activeTask;


  
  constructor(
    private _main: MainService) {
    
  }

  ngOnInit() {
    this.tasks = this._main.task
    this.activeTask = this.tasks[0];

  }
  tasks;
  pictures;
}

