import { Component, OnInit } from '@angular/core';
import { MainService } from '../shared/main.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-taskdetails',
  templateUrl: './taskdetails.component.html',
  styleUrls: ['./taskdetails.component.sass']
})
export class TaskdetailsComponent implements OnInit {

  id;

  activeTask;
  tasks;

  sub;

  constructor(
    private _main: MainService,
    private _route: ActivatedRoute
  ) {

  }

  availableColors = [
    { name: 'none', color: '' },
    { name: 'Primary', color: 'primary' },
    { name: 'Accent', color: 'accent' },
    { name: 'Warn', color: 'warn' }
  ];

  ngOnInit() {
    this.sub = this._route.params.subscribe(params => {
      this.id = +params['id'];
    });

    this.activeTask = this._main.task.find(o => o.id == this.id);
  }

  private ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
