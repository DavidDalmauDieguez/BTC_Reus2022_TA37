import { Component, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})

export class PersonajesComponent implements OnInit{
  title = 'personajes';

  tarjetas:any = null;

  constructor(private http: HttpClient){}

  ngOnInit() {
    this.http.get("https://rickandmortyapi.com/api/character/1,2,3,4,5,6")
    .subscribe(
      result => {
        this.tarjetas = result
      },
      error => {
        console.log('problemas');
      }
    );
  }
}
