// import { ThisReceiver } from '@angular/compiler';
import { Component} from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-programari',
  templateUrl: './programari.component.html',
  styleUrls: ['./programari.component.css']
})

export class ProgramariComponent  {
  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('service_4f30oql', 'template_7m6rzgt', e.target as HTMLFormElement, 'ah1vKo6QdFhoTaGa1')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
          
      });
        
  }
}
