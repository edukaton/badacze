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
                name: "Task number 1",
                pictures: [
                  {title: "Sample title 1",
                  url: "http://via.placeholder.com/350x150"},
                  {title: "Sample title 2",
                  url: "http://via.placeholder.com/200x100"}],
                video: "https://www.youtube.com/watch?v=B9FzVhw8_bY",
                category: "Biology",
                visibility: "Public", //private not supported yet 
                header: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mattis nisl quis ornare viverra. Cras sed libero volutpat, elementum lacus eget, tempus erat. Nullam feugiat lorem purus, quis rhoncus tellus.",
                difficulty: "low", //difficulty low, medium, high
                hastaskzero: "yes", //boolean

                acceptanceCriteria: [
                  {criterion: "Lorem ipsum dolor sit amet"},
                  {criterion: "In mattis nisl quis ornare viverra."},
                  {criterion: "Cras sed libero volutpat, elementum lacus"}]},
                
          
                {id:"2",
                name: "Task number 2",
                pictures: [
                  {title: "Sample title 2",
                  url: "http://via.placeholder.com/140x100"},
                  {title: "Sample title 2",
                  url: "http://via.placeholder.com/350x65"}],
                video: "https://www.youtube.com/watch?v=jWkMhCLkVOg",
                category: "Physics",
                visibility: "Public", //private not supported yet 
                header: "In mattis nisl quis ornare viverra.",
                description: "Curabitur maximus nisl ac justo accumsan auctor eu vitae enim. Fusce pellentesque ac metus sit amet pretium. Donec magna orci, lobortis at malesuada sed, rhoncus quis quam. Donec molestie.",
                difficulty: "medium", //difficulty low, medium, high
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

                                {id:"1",
                                taskId:"1",
                                userId:"3",
                                rating:"5"}, //rating is in 1-7 scale
                                
                                {id:"2",
                                taskId:"2",
                                userId:"2",
                                rating:"1"}, //rating is in 1-7 scale

                                {id:"2",
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
                            userId:"2",
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
