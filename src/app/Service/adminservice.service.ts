import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { User } from '../Models/user';
@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  constructor(private http: HttpClient) { }

  userurl="http://localhost:60358/api/Users/"

 httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
        'x-api-key':'NNctr6Tjrw9794gFXf3fi6zWBZ78j6Gv3UCb3y0x',
    })
  };

  loginUser(email:string,password:string)
  {
  
    return this.http.post<any>(this.userurl+"login?emailId="+email+"&password="+password,this.httpOptions)
   // return this.http.post<any>(this.userurl+"login",userDetails,this.httpOptions)

  }
  registerUser(userData: User) {
   
    var userD={
      Name:userData.Name,
      Email:userData.Email,
      MobileNumber:userData.MobileNumber,
      Gender:userData.Gender,
      RoleName:userData.RoleName,
      Age:userData.Age,
      IsActive:userData.IsActive,
      Password:userData.Password    
    }
    console.log(userD);
    return this.http.post<any>(this.userurl+"createUser", userD,this.httpOptions)
}


}
