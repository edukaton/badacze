import { Component, OnInit } from '@angular/core';
import { MainService } from '../shared/main.service';

@Component({
  selector: 'app-displaytasksolution',
  templateUrl: './displaytasksolution.component.html',
  styleUrls: ['./displaytasksolution.component.sass']
})
export class DisplaytasksolutionComponent implements OnInit {

  activeTask;
  tasks;
  users;
  taskStudentSolutions;
  activetaskStudentSolutions;
  studentWithSolution;

  constructor(
    private _main: MainService) {
    
  }

  ngOnInit() {
    this.tasks = this._main.task
    this.activeTask = this.tasks[0];

    this.users = this._main.user
    
    this.taskStudentSolutions = this._main.taskStudentSolution
 
    this.activetaskStudentSolutions = this.taskStudentSolutions.filter(
      taskStudentSolution => taskStudentSolution.taskId === this.activeTask.id)
  }

  getStudentName (studentId)
  {
    this.studentWithSolution = this._main.user.find(
      user => user.id === studentId
    )
    return this.studentWithSolution.name
  }

}
