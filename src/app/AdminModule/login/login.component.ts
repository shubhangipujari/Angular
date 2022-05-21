
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminserviceService } from 'src/app/Service/adminservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: AdminserviceService, private router: Router) { }


  email: string = ""
  password: string = ""

  statusCode = 0


  ngOnInit(): void {
  }


  login() {

    this.service.loginUser(this.email, this.password).subscribe(data => {
      console.log(data)

      if (data['Token']['token']) {
        this.statusCode = 200
        localStorage.setItem('token', data['Token']['token'])
        localStorage.setItem("userrole", data['UserDetails']['roleName'])
        localStorage.setItem("userId", data['UserDetails']['id'])
        localStorage.setItem("userName", data['UserDetails']['name'])

        this.router.navigate(['/welcome'])


        // let userrole=localStorage.getItem("userrole")

        // if(userrole=='A')

        // this.router.navigate(['/airlines'])
        // else
        // this.router.navigate(['/bookings'])

        //this.router.navigateByUrl('/airlines', { skipLocationChange: true })
      }
   

    },
      err => {
        console.log(err)
        this.statusCode = 400
      });

  }
}


