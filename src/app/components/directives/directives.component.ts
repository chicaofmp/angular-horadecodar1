import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  size = 40;
  font = 'cursive';
  color = 'crimson';

  classes = ["green-title", "small-text"];

  darktheme = ["gotham", "darkness"];

  constructor() { }

  ngOnInit(): void {
  }

}
