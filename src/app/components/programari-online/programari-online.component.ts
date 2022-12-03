import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map, subscribeOn } from 'rxjs';
import { programari } from 'src/app/core/interfaces';
import { programare } from 'src/app/core/services/programari.service';

@Component({
  selector: 'app-programari-online',
  templateUrl: './programari-online.component.html',
  styleUrls: ['./programari-online.component.css']
})
export class ProgramariOnlineComponent implements OnInit {
  title = 'AngularHttpRequest';
  allProgramari: programare[] = [];

  constructor(private http: HttpClient){}
    
  ngOnInit(): void {
    this.fetchProgramari();
  }

  onProgramariFetch() {
    this.fetchProgramari();
  }


  onProgramareOnline(programari:
     {First_name: string, Last_name: string, Email: string, Aparate: string, message: string, data: string}) {
     console.log(programari);
     const headers = new HttpHeaders(({'myHeader': 'Sklinique'}));
     this.http.post<{name: string}>(
     'https://proiect-final-9a3c9-default-rtdb.europe-west1.firebasedatabase.app/programari.json',
     programari, {headers: headers})
     .subscribe((res) => {
     console.log(res);
  })
  } 

  private fetchProgramari() {
  this.http.get<{[key: string]: programare}>(
    'https://proiect-final-9a3c9-default-rtdb.europe-west1.firebasedatabase.app/programari.json')
    .pipe(map((res) => {
      const programari = [];
      for (const key in res){
      if(res.hasOwnProperty(key)){
        programari.push({...res[key], id: key})
      }
     }
     return programari;
    }))
    .subscribe((programari) => {
      console.log(programari);
      this.allProgramari = programari;
    })
  }
}
