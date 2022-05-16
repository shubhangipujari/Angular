import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private route:Router){} 

  login()
  {
    this.route.navigate(['/login']); 
  }

  register()
  {
    this.route.navigate(['/register']); 
  }

  manageAirlines()
  {
    this.route.navigate(['/airlines']); 

  }

  manageSchedules()
  {
    this.route.navigate(['/schedules']); 

  }

}
