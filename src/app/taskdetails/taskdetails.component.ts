import { Component, OnInit } from '@angular/core';
import { MainService } from '../shared/main.service';

@Component({
  selector: 'app-taskdetails',
  templateUrl: './taskdetails.component.html',
  styleUrls: ['./taskdetails.component.sass']
})
export class TaskdetailsComponent implements OnInit {

  activeTask;

  constructor(
    private _main: MainService) {
    
  }
  
  availableColors = [
    { name: 'none', color: '' },
    { name: 'Primary', color: 'primary' },
    { name: 'Accent', color: 'accent' },
    { name: 'Warn', color: 'warn' }
  ];

  ngOnInit() {
    this.tasks = this._main.task
    this.activeTask = this.tasks[0];
    
  }
  tasks;
}
