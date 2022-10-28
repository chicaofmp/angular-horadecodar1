import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  name = 'Chicão';
  age = 35;
  hobbies = ["Basketball", "CSGO", "Movies", "Fortaleza"];
  employed = true;
  job = "Software Developer";
  car = {
    marca: "Fiat",
    modelo: "Cronos",
    ano: "2020",
    combustivel: "gasolina",
    cor: "prata"
  }


  constructor() { }

  ngOnInit(): void {
  }

}
