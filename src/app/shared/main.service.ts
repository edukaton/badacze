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
