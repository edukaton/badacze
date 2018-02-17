import { Component, OnInit } from '@angular/core';
import { MainService } from '../shared/main.service';

@Component({
  selector: 'app-initialstudentrating',
  templateUrl: './initialstudentrating.component.html',
  styleUrls: ['./initialstudentrating.component.sass']
})
export class InitialstudentratingComponent implements OnInit {
  activeTask;
  activeUser;
  tasks;
  users;
  taskStudentInitialRatings;
  activeTaskStudentInitialRating;

  constructor(
    private _main: MainService) {
    
  }

  ngOnInit() {
    this.tasks = this._main.task
    this.activeTask = this.tasks[0];
    

    this.users = this._main.user
    this.activeUser = this.users[1];
    
    this.taskStudentInitialRatings = this._main.taskStudentInitialRating  
 
    this.activeTaskStudentInitialRating = this.taskStudentInitialRatings.find(
      taskStudentInitialRating => taskStudentInitialRating.taskId === this.activeTask.id && taskStudentInitialRating.userId === this.activeUser.id)
    
  }

}
