import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { User } from '../Models/user';
import { Airline } from '../Models/airline';
import { Schedule } from '../Models/schedule';
import { Flightbooking } from '../Models/flightbooking';
@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  constructor(private http: HttpClient) { }

  userurl = "http://localhost:60358/api/Users/"
  airlineUrl = "http://localhost:45028/api/Airline/"
  scheduleUrl = "http://localhost:37852/api/Schedule/"
  bookigUrl = "http://localhost:20683/api/TicketBooking/"

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
      'x-api-key': 'NNctr6Tjrw9794gFXf3fi6zWBZ78j6Gv3UCb3y0x',
    })
  };

  loginUser(email: string, password: string) {

    return this.http.post<any>(this.userurl + "login?emailId=" + email + "&password=" + password, this.httpOptions)
    // return this.http.post<any>(this.userurl+"login",userDetails,this.httpOptions)

  }
  registerUser(userData: User) {

    var userD = {
      Name: userData.Name,
      Email: userData.Email,
      MobileNumber: userData.MobileNumber,
      Gender: userData.Gender,
      RoleName: userData.RoleName,
      Age: userData.Age,
      IsActive: userData.IsActive,
      Password: userData.Password
    }
    console.log(userD);
    return this.http.post<any>(this.userurl + "createUser", userD, this.httpOptions)
  }

  getAllAirlines() {
    return this.http.get<any>(this.airlineUrl + "getAirlines")
  }


  createAirline(airlineData: Airline) {

    var userD = {
      AirlineName: airlineData.AirlineName,
      Logo: airlineData.Logo,
      ContactNumber: airlineData.ContactNumber,
      ContactAddress: airlineData.ContactAddress,
      IsBlocked: Boolean(airlineData.IsBlocked) == true ? 1 : 0,
    }
    console.log(userD);
    return this.http.post<Airline>(this.airlineUrl + "createAirline", userD, this.httpOptions)
  }

  updateAirline(airlineData: Airline) {
    var userD = {
      Id: airlineData.Id,
      AirlineName: airlineData.AirlineName,
      Logo: airlineData.Logo,
      ContactNumber: airlineData.ContactNumber,
      ContactAddress: airlineData.ContactAddress,
      IsBlocked: Boolean(airlineData.IsBlocked) == true ? 1 : 0,
    }
    console.log(userD);
    return this.http.put<Airline>(this.airlineUrl + "updateAirline", userD, this.httpOptions)
  }

  getAllSchedules() {
    return this.http.get<any>(this.scheduleUrl + "getScheduleDetail")
  }

  getAllSearchSchedule(fromPlace: string, toPlace: string) {
    return this.http.get<any>(this.scheduleUrl + "searchScheduleDetails?fromplace=" + fromPlace + "&toPlace=" + toPlace)
  }

  getBookingId(userId: number, scheduleId: number) {
    return this.http.get<any>(this.bookigUrl + "getBookingDetails?userId=" + userId + "&scheduleId=" + scheduleId)
  }
  createSchedule(scheduledata: Schedule) {

    var userD = {
      AirlineId: Number(scheduledata.AirlineId),
      FlightNumber: scheduledata.FlightNumber,
      FlightName: scheduledata.FlightName,
      FromPlace: scheduledata.FromPlace,
      ToPlace: scheduledata.ToPlace,
      StartDateTime: scheduledata.StartDateTime,
      EndDateTime: scheduledata.EndDateTime,
      ScheduledDays: scheduledata.ScheduledDays,
      InstrumentUsed: scheduledata.InstrumentUsed,
      TotNumBuisSeat: scheduledata.TotNumBuisSeat,
      TotNumNonbuisSeat: scheduledata.TotNumNonbuisSeat,
      TicketCost: scheduledata.TicketCost,
      NumberOfRows: scheduledata.NumberOfRows,
      Meal: scheduledata.Meal,
      ChooseWay: scheduledata.ChooseWay

    }
    console.log(userD);
    return this.http.post<Schedule>(this.scheduleUrl + "createScheduleDetails", userD, this.httpOptions)
  }

  updateSchdule(scheduledata: Schedule) {
    var userD = {
      Id: scheduledata.Id,
      AirlineId: Number(scheduledata.AirlineId),
      FlightNumber: scheduledata.FlightNumber,
      FlightName: scheduledata.FlightName,
      FromPlace: scheduledata.FromPlace,
      ToPlace: scheduledata.ToPlace,
      StartDateTime: scheduledata.StartDateTime,
      EndDateTime: scheduledata.EndDateTime,
      ScheduledDays: scheduledata.ScheduledDays,
      InstrumentUsed: scheduledata.InstrumentUsed,
      TotNumBuisSeat: scheduledata.TotNumBuisSeat,
      TotNumNonbuisSeat: scheduledata.TotNumNonbuisSeat,
      TicketCost: scheduledata.TicketCost,
      NumberOfRows: scheduledata.NumberOfRows,
      Meal: scheduledata.Meal,
      ChooseWay: scheduledata.ChooseWay

    }
    console.log(userD);
    return this.http.put<Schedule>(this.scheduleUrl + "updateScheduleDetails", userD, this.httpOptions)
  }

  getByScheduleId(Id: number) {
    return this.http.get<any>(this.scheduleUrl + "getScheduleById?id=" + Id)
  }

  createBooking(bookingData: Flightbooking) {
    return this.http.post<Flightbooking>(this.bookigUrl + "createTicketBooking", bookingData, this.httpOptions)
  }

  updateBooking(bookingData: Flightbooking) {
    return this.http.put<Schedule>(this.bookigUrl + "updateScheduleDetails", bookingData, this.httpOptions)
  }

  getByEmailId(email: string) {
    return this.http.get<any>(this.bookigUrl + "getEmailDetails?email=" + email)
  }
  getByPnrNumber(pnrNumber: string) {
    return this.http.get<any>(this.bookigUrl + "getPnrDetails?pnrNumber=" + pnrNumber)
  }

  loggedIn() {
    return !!localStorage.getItem('token')
  }



}
