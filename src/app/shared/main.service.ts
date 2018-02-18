import { Injectable } from '@angular/core';
import {
  Http,
  Response
} from '@angular/http'
import 'rxjs/Rx';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class MainService {

  admin: boolean

  data: any;

  logo: string = '/assets/img/logo.png'

  // apiRoot: string = '/api';``
  // results: Object[];
  // loading: boolean;

  users: any[] = [];

  user: any = [{id: 1,
                name:"Tomasz",
                role:"Teacher"},

                {id: 2,
                name:"Mariusz",
                role:"Student"},

                {id: 3,
                name:"Dariusz",
                role:"Student"}];

  task: any = [{
                id: 1,
                name: "Oddaj starą choinkę do chorzowskiego ZOO",
                picture: "././assets/img/choinka_fake_news_1024.png",
                category: "Przyroda",
                visibility: "Public", //private not supported yet
                taskdescription: "Przeanalizuj treść ogłoszenia zamieszczonego na portalu Facebook.",
                difficulty: "Poziom 3", //difficulty low, medium, high
                hastaskzero: "yes", //boolean

                acceptanceCriteria: [
                  {criterion: "Lorem ipsum dolor sit amet"},
                  {criterion: "In mattis nisl quis ornare viverra."},
                  {criterion: "Cras sed libero volutpat, elementum lacus"}]},

                  {id: 2,
                name: "Samochód Elona Muska walnie w Ziemię.",
                picture: "http://nczas.com/wp-content/uploads/2018/02/Starman_SpaceX_elon_musk_tesla.jpg",
                category: "Astrofizyka",
                visibility: "Public", //private not supported yet
                header: "Samochód Elona Muska walnie w Ziemię. Jego orbita przecina się z naszą",
                taskdescription: "Przeanalizuj treść artykułu.",
                descriptionP1: "W zeszłym tygodniu właściciel firmy SpaceX Elon Musk z powodzeniem wystrzelił rakietę Falcon Heavy, najpotężniejszą rakietę funkcjonalną na świecie. Rakieta wyniosła w przestrzeń kosmiczną jasno czerwony samochód Tesla Roadster, który rozpoczął dryf na eliptycznej orbicie wokół Słońca. Pierwsze dane pozwalają nam przewidywać jego ewentualne dalsze losy.",
                descriptionP2: "Jak donosi Daniel Clery w wywiadzie udzielonym dla ‚Science’, naukowcy specjalizujący się w dynamice orbitalnej dokonali obliczenia możliwej podróży samochodu w ciągu najbliższych kilku milionów lat. ",
                descriptionP3: "Według ich szacunków istnieje 6 procent szans na to, że w ciągu ponad miliona lat, maszyna zderzy się z Ziemią. Choć nie da się dokładnie ustalić, dokąd zmierza Roadster Muska, można przyjąć pewne założenia. Hanno Rein z University of Toronto w Kanadzie i jego koledzy prowadzą badania, które obejmują modelowanie ruchu planetarnego, które zapewnią im odpowiednie narzędzia do zbadania dalszych losów samochodu kosmicznego. Udoskonalili oni swoje modele i przeprowadzili test, aby przewidzieć dalszą podróż samochodu. Ich wyniki pojawiają się w badaniu dostępnym na serwerze preprint arXiv. Obecnie Roadster zmierza w kierunku Marsa. Jak  napisał William Hardwood z CBS News, przemknie on w promieniu 69 milionów mil od Czerwonej Planety 10 czerwca, osiągając swoją najdalszą odległość od słońca (154,7 miliona mil) 9 listopada. Ale na tym jego podróż się nie skończy. Jak wyjaśnia Clery, grawitacja Słońca doprowadzi pojazd z powrotem do wewnętrznego układu słonecznego. Będzie on nadal krążył po naszej rodzinie planetarnej, wielokrotnie przecinając orbity Marsa, Ziemi i Wenus, podobnie jak asteroidy wewnętrznego układu słonecznego. Samochód Muska ma rozbić się o Ziemię ok. 2091 roku. Większość pojazdu najprawdopodobniej ulegnie spaleniu, nim dotrze na powierzchnię. Nie ma żadnego zagrożenia dla zdrowia i bezpieczeństwa – zapewnia Rein Clery.Spekulacje na temat miejsca pobytu samochodu skłoniły inżyniera Ben Pearsona do rozpoczęcia śledzenia samochodu za pomocą strony internetowej ‚Where is Roadster?’. Strona pokazuje pozycję Roadstera w kosmosie w porównaniu z Ziemią, Wenus, Merkurego, Marsem i Ceres, wykorzystując dane z NASA.Nikt nie wie dokładnie, jak zakończy się podróż Roadstera, ale upłynie jeszcze wiele czasu nim się dowiemy. Rein informuje CBS News, że naukowcy nie spodziewają się, że to odkrycie doprowadzi do nowego spojrzenia na astrofizykę. Ale dodaje, że „zabawa była fajna.” Źródło: CBS News",
                difficulty: "Poziom 4", //difficulty low, medium, high
                hastaskzero: "yes", //boolean

                acceptanceCriteria: [
                  {criterion: "Lorem ipsum dolor sit amet"},
                  {criterion: "In mattis nisl quis ornare viverra."},
                  {criterion: "Cras sed libero volutpat, elementum lacus"}]},

                  {id: 3,
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

                {id: 4,
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

  taskStudentInitialRating: any = [{id: 1,
                                taskId: 1,
                                userId: 2,
                                rating: 4}, //rating is in 1-7 scale

                                {id: 2,
                                taskId: 1,
                                userId: 3,
                                rating: 5}, //rating is in 1-7 scale
                                {id: 3,
                                taskId: 2,
                                userId: 2,
                                rating: 1}, //rating is in 1-7 scale

                                {id: 4,
                                taskId: 2,
                                userId: 3,
                                rating: 7}]; //rating is in 1-7 scale

//student can add many solutions to single task
  taskStudentSolution: any = [{id: 1,
                            taskId: 1,
                            userId: 2,
                            description:"Curabitur maximus nisl ac justo accumsan auctor eu vitae enim.",
                            source:"https://scholar.google.pl/",
                            sourcePower: 6,
                            solutionType: "potwierdza"}, //can be online, paper etc

                            {id: 2,
                            taskId: 1,
                            userId: 3,
                            description:"Curabitur maximus ni.",
                            source:"https://scholar.google.pl/",
                            sourcePower: 6,
                            solutionType: "potwierdza"}, //can be online, paper etc

                            {id: 3,
                            taskId: 2,
                            userId: 3,
                            description:"Curabitur maximus ni.",
                            source:"https://scholar.google.pl/",
                            sourcePower: 3,
                            solutionType: "zaprzecza"}]; //can be online, paper etc

  taskStudentFinalRating: any = [{id: 1,
                                taskId: 1,
                                userId: 2,
                                rating: 7}, //rating is in 1-7 scale

                                {id: 1,
                                taskId: 1,
                                userId: 3,
                                rating: 5}, //rating is in 1-7 scale

                                {id: 2,
                                taskId: 2,
                                userId: 2,
                                rating: 6}, //rating is in 1-7 scale

                                {id: 2,
                                taskId: 2,
                                userId: 3,
                                rating: 1}]; //rating is in 1-7 scale

  constructor(private http:Http) {
    // this.results = []
    // this.loading = false;
  }

  // mainData(term: string) {
  //   let apiUrl = `${this.apiRoot}`;
  //     this.http.get(apiUrl)
  //       .map(res => res.json())
  //       .subscribe(
  //         data => {
  //           this.data = data
  //           console.log(this.data)
  //         }
  //       )
  // }

  // log() {
  //   console.log("main service is on");
  // }



}
