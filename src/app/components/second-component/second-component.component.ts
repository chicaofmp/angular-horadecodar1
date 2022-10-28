import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css']
})
export class SecondComponentComponent implements OnInit {
  @Input() name: string; 
  @Input() age = 35;
  @Input() hobbies: Array<string>;


  user = {
    login: "chico@hotmail.com",
    pwd: 123
  }


  constructor() { }

  ngOnInit(): void {
  }

}
