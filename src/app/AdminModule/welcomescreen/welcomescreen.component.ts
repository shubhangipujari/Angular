import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcomescreen',
  templateUrl: './welcomescreen.component.html',
  styleUrls: ['./welcomescreen.component.css']
})
export class WelcomescreenComponent implements OnInit {

  userName=localStorage.getItem("userName")
  constructor() { }

  ngOnInit(): void {
  }

}
