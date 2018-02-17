import { Component, OnInit } from '@angular/core';
import { MainService } from '../shared/main.service';

@Component({
  selector: 'app-finalstudentrating',
  templateUrl: './finalstudentrating.component.html',
  styleUrls: ['./finalstudentrating.component.sass']
})
export class FinalstudentratingComponent implements OnInit {
  activeTask;
  activeUser;
  tasks;
  users;
  taskStudentFinalRatings;
  taskStudentInitialRatings;
  activeTaskStudentFinalRating;
  activeTaskStudentInitialRating;

  constructor(
    private _main: MainService) {
    
  }

  ngOnInit() {
    this.tasks = this._main.task
    this.activeTask = this.tasks[0];
    

    this.users = this._main.user
    this.activeUser = this.users[1];
    
    this.taskStudentFinalRatings = this._main.taskStudentFinalRating  
 
    this.activeTaskStudentFinalRating = this.taskStudentFinalRatings.find(
      taskStudentFinalRating => taskStudentFinalRating.taskId === this.activeTask.id && taskStudentFinalRating.userId === this.activeUser.id)
      
    this.taskStudentInitialRatings = this._main.taskStudentInitialRating  
 
    this.activeTaskStudentInitialRating = this.taskStudentInitialRatings.find(
      taskStudentInitialRating => taskStudentInitialRating.taskId === this.activeTask.id && taskStudentInitialRating.userId === this.activeUser.id)
      
  }

}
