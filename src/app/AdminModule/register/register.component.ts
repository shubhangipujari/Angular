import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/user';
import { AdminserviceService } from 'src/app/Service/adminservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userData: User = new User();
  statusCode = 0
  constructor(private service: AdminserviceService, private router: Router) { }
  ngOnInit(): void {
  }

  register() {
    this.service.registerUser(this.userData).subscribe(data => {
      if (data) {
        this.statusCode = 201;
        this.router.navigate(['/login'])
      }
    },
      err => console.log(err));

  }

 
}
