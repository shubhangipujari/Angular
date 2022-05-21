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
  return "You can create airline Details, schedule for flight and view details by email Id"
  else
  return "Book Flights anywhere with world's largest Flight Booking Platform, check your flight details and also ticket cancellation by PRN Number "
 }

}
