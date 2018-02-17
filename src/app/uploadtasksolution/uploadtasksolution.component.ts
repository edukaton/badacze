import { Component, OnInit } from '@angular/core';
import { MainService } from '../shared/main.service';

@Component({
  selector: 'app-uploadtasksolution',
  templateUrl: './uploadtasksolution.component.html',
  styleUrls: ['./uploadtasksolution.component.sass']
})
export class UploadtasksolutionComponent implements OnInit {

  activeTask;
  activeUser;
  tasks;
  users;
  taskStudentSolutions;
  activetaskStudentSolutions;

  constructor(
    private _main: MainService) {
    
  }

  ngOnInit() {
    this.tasks = this._main.task
    this.activeTask = this.tasks[0];
    

    this.users = this._main.user
    this.activeUser = this.users[1];
    
    this.taskStudentSolutions = this._main.taskStudentSolution
 
    this.activetaskStudentSolutions = this.taskStudentSolutions.filter(
      taskStudentSolution => taskStudentSolution.taskId === this.activeTask.id && taskStudentSolution.userId === this.activeUser.id)
    
  }
}
