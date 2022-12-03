// import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-programari',
  templateUrl: './programari.component.html',
  styleUrls: ['./programari.component.css'],
})
export class ProgramariComponent {
  constructor(private http: HttpClient) {}

  public onClickProgramareOnline(programari: {
    First_name: string;
    Last_name: string;
    Email: string;
    Aparate: string;
    message: string;
    data: string;
  }) {
    console.log(programari);
    const headers = new HttpHeaders({ myHeader: 'Sklinique' });
    this.http
      .post<{ name: string }>(
        'https://proiect-final-9a3c9-default-rtdb.europe-west1.firebasedatabase.app/programari.json',
        programari,
        { headers: headers }
      )
      .subscribe((res) => {
        console.log(res);
      });
  }

  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_4f30oql',
        'template_7m6rzgt',
        e.target as HTMLFormElement,
        'ah1vKo6QdFhoTaGa1'
      )
      .then(
        (result: EmailJSResponseStatus) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
}
