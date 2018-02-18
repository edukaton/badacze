import { Injectable } from '@angular/core';
import {
  Http,
  Response
} from '@angular/http'
import 'rxjs/Rx';



@Injectable()
export class MainService {

  data: any;

  apiRoot: string = '/api';
  results: Object[];
  loading: boolean;

  users: any[] = [];

  user: any = [{id:"1",
                name:"Tomasz",
                role:"Teacher"},

                {id:"2",
                name:"Mariusz",
                role:"Student"},

                {id:"3",
                name:"Dariusz",
                role:"Student"}];

  task: any = [{id:"1",
                name: "Zoo w Chorzowie",
                picture: "http://via.placeholder.com/350x150",
                video: "https://www.youtube.com/watch?v=B9FzVhw8_bY",
                category: "Przyroda",
                visibility: "Public", //private not supported yet
                header: "Przynieś choinki do zoo w Chorzowie",
                taskdescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt eu erat ut varius. Vivamus a laoreet ligula, non consequat arcu. Duis at ultrices tellus. Nam vitae nunc pharetra nunc sodales tristique. Nunc tristique varius nulla in condimentum. Vestibulum vitae feugiat dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
                descriptionP1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt eu erat ut varius. Vivamus a laoreet ligula, non consequat arcu. Duis at ultrices tellus. Nam vitae nunc pharetra nunc sodales tristique. Nunc tristique varius nulla in condimentum. Vestibulum vitae feugiat dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
                descriptionP2: "Nullam pellentesque tincidunt placerat. Quisque vitae mauris quam. Donec eget eros ac sem varius consectetur. Nunc maximus mattis est sed vehicula. Vestibulum imperdiet ligula eget placerat viverra. Phasellus aliquam scelerisque dui, eget finibus mi egestas ut. Nunc id mattis leo. Nam eget tortor lectus. Nulla dapibus ligula vitae ex tempus faucibus. Curabitur porta, diam ac auctor auctor, dolor ligula fringilla justo, in interdum justo nisi non lectus. Pellentesque quis augue metus. In at nibh faucibus, dapibus est ut, vulputate enim. Nam vehicula aliquet dui, id laoreet ex auctor fermentum.",
                descriptionP3: "Nunc facilisis tellus vel arcu pharetra, a faucibus est vehicula. Donec volutpat, eros eget malesuada varius, risus eros tempus nulla, id sollicitudin neque dui sit amet lacus. Nullam a libero ipsum. Sed a aliquet orci, id malesuada est. Maecenas ac tortor neque. Curabitur sit amet nulla rutrum, ultricies tellus eu, pharetra dui. Nullam consectetur sem lectus, sed tincidunt metus pellentesque vitae. Nulla aliquam egestas porttitor. Proin sed dolor ultricies, facilisis ante ut, congue sem. Sed dui mi, tempor sit amet aliquam at, posuere et lectus. Duis porttitor leo condimentum massa aliquam iaculis.",
                difficulty: "Poziom 1", //difficulty low, medium, high
                hastaskzero: "yes", //boolean

                acceptanceCriteria: [
                  {criterion: "Lorem ipsum dolor sit amet"},
                  {criterion: "In mattis nisl quis ornare viverra."},
                  {criterion: "Cras sed libero volutpat, elementum lacus"}]},
                
                  {id:"2",
                name: "Zupa Grzybowa",
                picture: "http://via.placeholder.com/350x150",
                video: "https://www.youtube.com/watch?v=B9FzVhw8_bY",
                category: "Przyroda",
                visibility: "Public", //private not supported yet
                header: "Przynieś choinki do zoo w Chorzowie",
                taskdescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt eu erat ut varius. Vivamus a laoreet ligula, non consequat arcu. Duis at ultrices tellus. Nam vitae nunc pharetra nunc sodales tristique. Nunc tristique varius nulla in condimentum. Vestibulum vitae feugiat dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
                descriptionP1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt eu erat ut varius. Vivamus a laoreet ligula, non consequat arcu. Duis at ultrices tellus. Nam vitae nunc pharetra nunc sodales tristique. Nunc tristique varius nulla in condimentum. Vestibulum vitae feugiat dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
                descriptionP2: "Nullam pellentesque tincidunt placerat. Quisque vitae mauris quam. Donec eget eros ac sem varius consectetur. Nunc maximus mattis est sed vehicula. Vestibulum imperdiet ligula eget placerat viverra. Phasellus aliquam scelerisque dui, eget finibus mi egestas ut. Nunc id mattis leo. Nam eget tortor lectus. Nulla dapibus ligula vitae ex tempus faucibus. Curabitur porta, diam ac auctor auctor, dolor ligula fringilla justo, in interdum justo nisi non lectus. Pellentesque quis augue metus. In at nibh faucibus, dapibus est ut, vulputate enim. Nam vehicula aliquet dui, id laoreet ex auctor fermentum.",
                descriptionP3: "Nunc facilisis tellus vel arcu pharetra, a faucibus est vehicula. Donec volutpat, eros eget malesuada varius, risus eros tempus nulla, id sollicitudin neque dui sit amet lacus. Nullam a libero ipsum. Sed a aliquet orci, id malesuada est. Maecenas ac tortor neque. Curabitur sit amet nulla rutrum, ultricies tellus eu, pharetra dui. Nullam consectetur sem lectus, sed tincidunt metus pellentesque vitae. Nulla aliquam egestas porttitor. Proin sed dolor ultricies, facilisis ante ut, congue sem. Sed dui mi, tempor sit amet aliquam at, posuere et lectus. Duis porttitor leo condimentum massa aliquam iaculis.",
                difficulty: "Poziom 1", //difficulty low, medium, high
                hastaskzero: "yes", //boolean

                acceptanceCriteria: [
                  {criterion: "Lorem ipsum dolor sit amet"},
                  {criterion: "In mattis nisl quis ornare viverra."},
                  {criterion: "Cras sed libero volutpat, elementum lacus"}]},

                  {id:"3",
                name: "Morderczy kefir z Krasnystawu",
                picture: "http://via.placeholder.com/350x150",
                video: "https://www.youtube.com/watch?v=B9FzVhw8_bY",
                category: "Przyroda",
                visibility: "Public", //private not supported yet
                header: "Przynieś choinki do zoo w Chorzowie",
                taskdescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt eu erat ut varius. Vivamus a laoreet ligula, non consequat arcu. Duis at ultrices tellus. Nam vitae nunc pharetra nunc sodales tristique. Nunc tristique varius nulla in condimentum. Vestibulum vitae feugiat dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
                descriptionP1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt eu erat ut varius. Vivamus a laoreet ligula, non consequat arcu. Duis at ultrices tellus. Nam vitae nunc pharetra nunc sodales tristique. Nunc tristique varius nulla in condimentum. Vestibulum vitae feugiat dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
                descriptionP2: "Nullam pellentesque tincidunt placerat. Quisque vitae mauris quam. Donec eget eros ac sem varius consectetur. Nunc maximus mattis est sed vehicula. Vestibulum imperdiet ligula eget placerat viverra. Phasellus aliquam scelerisque dui, eget finibus mi egestas ut. Nunc id mattis leo. Nam eget tortor lectus. Nulla dapibus ligula vitae ex tempus faucibus. Curabitur porta, diam ac auctor auctor, dolor ligula fringilla justo, in interdum justo nisi non lectus. Pellentesque quis augue metus. In at nibh faucibus, dapibus est ut, vulputate enim. Nam vehicula aliquet dui, id laoreet ex auctor fermentum.",
                descriptionP3: "Nunc facilisis tellus vel arcu pharetra, a faucibus est vehicula. Donec volutpat, eros eget malesuada varius, risus eros tempus nulla, id sollicitudin neque dui sit amet lacus. Nullam a libero ipsum. Sed a aliquet orci, id malesuada est. Maecenas ac tortor neque. Curabitur sit amet nulla rutrum, ultricies tellus eu, pharetra dui. Nullam consectetur sem lectus, sed tincidunt metus pellentesque vitae. Nulla aliquam egestas porttitor. Proin sed dolor ultricies, facilisis ante ut, congue sem. Sed dui mi, tempor sit amet aliquam at, posuere et lectus. Duis porttitor leo condimentum massa aliquam iaculis.",
                difficulty: "Poziom 1", //difficulty low, medium, high
                hastaskzero: "yes", //boolean

                acceptanceCriteria: [
                  {criterion: "Lorem ipsum dolor sit amet"},
                  {criterion: "In mattis nisl quis ornare viverra."},
                  {criterion: "Cras sed libero volutpat, elementum lacus"}]},

                {id:"4",
                name: "Samochód w kosmosie",
                picture: "http://via.placeholder.com/140x100",
                video: "https://www.youtube.com/watch?v=jWkMhCLkVOg",
                category: "Fizyka",
                visibility: "Public", //private not supported yet
                header: "In mattis nisl quis ornare viverra.",
                taskdescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt eu erat ut varius. Vivamus a laoreet ligula, non consequat arcu. Duis at ultrices tellus. Nam vitae nunc pharetra nunc sodales tristique. Nunc tristique varius nulla in condimentum. Vestibulum vitae feugiat dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
                descriptionP1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt eu erat ut varius. Vivamus a laoreet ligula, non consequat arcu. Duis at ultrices tellus. Nam vitae nunc pharetra nunc sodales tristique. Nunc tristique varius nulla in condimentum. Vestibulum vitae feugiat dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
                descriptionP2: "Nullam pellentesque tincidunt placerat. Quisque vitae mauris quam. Donec eget eros ac sem varius consectetur. Nunc maximus mattis est sed vehicula. Vestibulum imperdiet ligula eget placerat viverra. Phasellus aliquam scelerisque dui, eget finibus mi egestas ut. Nunc id mattis leo. Nam eget tortor lectus. Nulla dapibus ligula vitae ex tempus faucibus. Curabitur porta, diam ac auctor auctor, dolor ligula fringilla justo, in interdum justo nisi non lectus. Pellentesque quis augue metus. In at nibh faucibus, dapibus est ut, vulputate enim. Nam vehicula aliquet dui, id laoreet ex auctor fermentum.",
                descriptionP3: "Nunc facilisis tellus vel arcu pharetra, a faucibus est vehicula. Donec volutpat, eros eget malesuada varius, risus eros tempus nulla, id sollicitudin neque dui sit amet lacus. Nullam a libero ipsum. Sed a aliquet orci, id malesuada est. Maecenas ac tortor neque. Curabitur sit amet nulla rutrum, ultricies tellus eu, pharetra dui. Nullam consectetur sem lectus, sed tincidunt metus pellentesque vitae. Nulla aliquam egestas porttitor. Proin sed dolor ultricies, facilisis ante ut, congue sem. Sed dui mi, tempor sit amet aliquam at, posuere et lectus. Duis porttitor leo condimentum massa aliquam iaculis.",
                difficulty: "Poziom 2", //difficulty low, medium, high
                hastaskzero: "no", //boolean

                acceptanceCriteria: [
                    {criterion: "im. Fusce pellentesque ac met"},
                    {criterion: "Curabitur maximus nisl ac justo accumsan au"},
                    {criterion: "c justo accumsan a"}]
  }];

  taskStudentInitialRating: any = [{id:"1",
                                taskId:"1",
                                userId:"2",
                                rating:"4"}, //rating is in 1-7 scale

                                {id:"2",
                                taskId:"1",
                                userId:"3",
                                rating:"5"}, //rating is in 1-7 scale
                                {id:"3",
                                taskId:"2",
                                userId:"2",
                                rating:"1"}, //rating is in 1-7 scale

                                {id:"4",
                                taskId:"2",
                                userId:"3",
                                rating:"7"}]; //rating is in 1-7 scale

//student can add many solutions to single task
  taskStudentSolution: any = [{id:"1",
                            taskId:"1",
                            userId:"2",
                            description:"Curabitur maximus nisl ac justo accumsan auctor eu vitae enim.",
                            video: "https://www.youtube.com/watch?v=-UE7tXDKIus",
                            picture: "http://via.placeholder.com/350x150",
                            source:"www.eurekalert.org",
                            sourceAuthor:"Cori Bargmann, Rockefeller University",
                            sourceYear: "2017",
                            sourcetype: "Online"}, //can be online, paper etc

                            {id:"2",
                            taskId:"1",
                            userId:"3",
                            description:"Curabitur maximus ni.",
                            picture: "http://via.placeholder.com/350x65",
                            source:"https://scholar.google.pl/",
                            sourceAuthor:"Marian Józef, Kraków AGH University",
                            sourceYear: "1983",
                            sourcetype: "Paper"}, //can be online, paper etc

                            {id:"3",
                            taskId:"2",
                            userId:"3",
                            description:"Curabitur maximus ni.",
                            video: "https://www.youtube.com/watch?v=O52jAYa4Pm8",
                            source:"youtube",
                            sourceAuthor:"prof Krzysztof Krzysztof",
                            sourceYear: "1998",
                            sourcetype: "Online"}]; //can be online, paper etc

  taskStudentFinalRating: any = [{id:"1",
                                taskId:"1",
                                userId:"2",
                                rating:"7"}, //rating is in 1-7 scale

                                {id:"1",
                                taskId:"1",
                                userId:"3",
                                rating:"5"}, //rating is in 1-7 scale

                                {id:"2",
                                taskId:"2",
                                userId:"2",
                                rating:"6"}, //rating is in 1-7 scale

                                {id:"2",
                                taskId:"2",
                                userId:"3",
                                rating:"1"}]; //rating is in 1-7 scale

  constructor(private http:Http) {
    this.results = []
    this.loading = false;
  }

  mainData(term: string) {
    let apiUrl = `${this.apiRoot}`;
      this.http.get(apiUrl)
        .map(res => res.json())
        .subscribe(
          data => {
            this.data = data
            console.log(this.data)
          }
        )
  }

  log() {
    console.log("main service is on");
  }



}
