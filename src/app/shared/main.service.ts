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
                hastaskzero: "yes"},

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
                hastaskzero: "yes" //boolean

               },

                  {id: 3,
                    name: " Czy Twoje dziecko gra w Pokemony? Może stracić życie!",
                    picture: "https://slack-imgs.com/?c=1&url=http%3A%2F%2Fwww.thinkgeek.com%2Fimages%2Fproducts%2Fadditional%2Flarge%2Fjgpo_poke_ball_serving_bowl_set_closed.jpg",
                    category: "Astrofizyka",
                    header: " Czy Twoje dziecko gra w Pokemony? Może stracić życie!",
                    taskdescription: "Przenalizuj załączone materiały",
                    difficulty: "Poziom 5",
                    hastaskzero: "yes"},

                  {id: 4,
                name: "Mickiewicz - Romantyk czy Pozytywiska",
                picture: "http://czytelniczy.pl/wp-content/uploads/2017/10/mickiewicz.jpg",
                category: "Język polski",
                header: "Przynieś choinki do zoo w Chorzowie",
                taskdescription: "Przenalizuj załączone materiały",
                difficulty: "Poziom 5",
                hastaskzero: "yes"},

                {id: 5,
                  name: "W ciągu 48 godzin naprawili system szkolny. Kim są Badacze?",
                  picture: "https://slack-imgs.com/?c=1&url=https%3A%2F%2Fwudsilesia.pl%2Fstatic%2Fimg%2Fbadacze.b4a35f3.png",
                  category: "Edukacja",
                  header: "W ciągu 48 godzin naprawili system szkolny. Kim są Badacze?",
                  taskdescription: "Przenalizuj załączone materiały",
                  difficulty: "Poziom 5",
                  hastaskzero: "yes"},

                  {id: 6,
                    name: "Zenon Ziembiewicz: Był Karierowiczem czy robił karierę?",
                    picture: "https://cdn.bonito.pl/zdjecia/8/a6-granica-kolorowe-ilustrac.jpg",
                    category: "Język polski",
                    header: "Zenon Ziembiewicz: Był Karierowiczem czy robił karierę?",
                    taskdescription: "Przenalizuj załączone materiały",
                    difficulty: "Poziom 4",
                    hastaskzero: "yes"},

                    {id: 7,
                      name: "Przyjaciele na cenzurowanym. Po tym artykule wstrzymają emisję",
                      picture: "https://slack-imgs.com/?c=1&url=https%3A%2F%2Fwww.fuse.tv%2Fimage%2F56981abd8ae9e34f030000c0%2F816%2F545%2Ffriends-cast-photo-nbc.jpg",
                      category: "Media i rozrywka",
                      header: "Przyjaciele na cenzurowanym. Po tym artykule wstrzymają emisję",
                      taskdescription: "Przenalizuj załączone materiały",
                      difficulty: "Poziom 3",
                      hastaskzero: "yes"},

                      {id: 8,
                        name: "Bohosiewicz zaprosiła kamery do swojego mieszkania. To, co znajduje się (..)",
                        picture: "https://slack-imgs.com/?c=1&url=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fnarnia%2Fimages%2F4%2F4b%2FNarniaWardrobe.jpg%2Frevision%2Flatest%2Fscale-to-width-down%2F640%3Fcb%3D20090103195137",
                        category: "Media i rozrywka",
                        header: "Bohosiewicz zaprosiła kamery do swojego mieszkania. To, co znajduje się za drzwiami szafy... Hit!",
                        taskdescription: "Przenalizuj załączone materiały",
                        difficulty: "Poziom 1",
                        hastaskzero: "yes"},


                          {id: 9,
                            name: "Amerykańscy naukowcy udowodnili, że Ziemia jest płaska!",
                            picture: "https://slack-imgs.com/?c=1&url=https%3A%2F%2F1.bp.blogspot.com%2F-eMFXCwSkRuA%2FWa2AAv3WEFI%2FAAAAAAAANV0%2Fmn_C6taEyw4NPOexvsgd1yK8A1AvaNLswCLcBGAs%2Fs1600%2FFlat%252BEarthers%252BClaim%252BThe%252BSolar%252BEclipse%252BJust%252BProved%252BEarth%252BIs%252BFlat.jpg",
                            category: "Astrofizyka",
                            header: "Amerykańscy naukowcy udowodnili, że Ziemia jest płaska!",
                            taskdescription: "Przenalizuj załączone materiały",
                            difficulty: "Poziom 2",
                            hastaskzero: "yes"},

                            {id: 10,
                              name: " Oglądanie filmów z bliska niszczy wzrok! Badanie sprzed 30 lat (..)!",
                              picture: "https://slack-imgs.com/?c=1&url=http%3A%2F%2Fwww.komputerswiat.pl%2Fmedia%2F2015%2F169%2F3910775%2F3.jpg",
                              category: "Zdrowie",
                              header: "Oglądanie filmów z bliska niszczy wzrok! Badanie sprzed 30 lat udowadnia okrutną prawdę!",
                              taskdescription: "Przenalizuj załączone materiały",
                              difficulty: "Poziom 3",
                              hastaskzero: "yes"}
      
      

              ];

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
