import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminserviceService } from './Service/adminservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  roleName = localStorage.getItem("userrole")
  visiblleLi = false
  visiblleLi1 = false

  constructor(private route: Router, private service: AdminserviceService) { }

  ngOnInit(): void {

    

  }




  login() {
    this.route.navigate(['/login']);
  }

  register() {
    this.route.navigate(['/register']);
  }

  manageAirlines() {
    this.route.navigate(['/airlines']);

  }

  manageSchedules() {
    this.route.navigate(['/schedules']);
  }
  BookingDetails() {
    this.route.navigate(['/ticketmodify']);
  }

  manageBooking()
  {
    this.route.navigate(['/bookings']);

  }

  viewTickets()
  {
    this.route.navigate(['/pnrdetails']);

  }
  

  logout() {
    localStorage.clear();

    this.route.navigate(['/login']);
  }

  LoggedIn(input: boolean): boolean {
    if (input) {
      return this.service.loggedIn();
    }
    else {
      return !this.service.loggedIn();
    }
  }

Logged(input:boolean,role:string)
{
  if(input)
  {
    return (this.service.loggedIn() && localStorage.getItem("userrole")==role)
  }
  else
  {
    return !this.service.loggedIn();

  }
}


}
