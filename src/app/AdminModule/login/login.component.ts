
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminserviceService } from 'src/app/Service/adminservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:AdminserviceService,private router:Router) { }


  email:string=""
  password:string=""


  
  
  ngOnInit(): void {
  }


  login() {
    
    this.service.loginUser(this.email,this.password).subscribe(data => {
      console.log(data['token'])
    
     localStorage.setItem('token', data['token'])
      this.router.navigate(['/airlines'])
    },
      err => console.log(err));
  }
}


