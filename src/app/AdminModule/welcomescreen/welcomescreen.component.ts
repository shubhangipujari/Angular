import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcomescreen',
  templateUrl: './welcomescreen.component.html',
  styleUrls: ['./welcomescreen.component.css']
})
export class WelcomescreenComponent implements OnInit {

  userName=localStorage.getItem("userName")
  userrole=localStorage.getItem("userrole")

  constructor() { }

  ngOnInit(): void {
  }

 message()
 {
  if(this.userrole=="A")
  return "You can create airline, achedule for flight and view details by email Id"
  else
  return "You book flight view by PRN Number and Cancel the Ticket"
 }

}
