import { Component, OnInit } from '@angular/core';
import { Flightbooking } from 'src/app/Models/flightbooking';
import { Schedule, Schedule1 } from 'src/app/Models/schedule';
import { AdminserviceService } from 'src/app/Service/adminservice.service';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
  providers: [DatePipe]
})
export class BookingComponent implements OnInit {

  scheduleDetails: Array<Schedule1> = new Array<Schedule1>()
  FromPlace: string = ""
  ToPlace: string = ""

  scheduledata: Schedule1 = new Schedule1();
  bookingdata: Flightbooking = new Flightbooking();
  statusCode = 0
  pnrNumber = ""
  visible = true
  StartDateTime:any=""
  Way:string="O"
  constructor(private service: AdminserviceService, public datePipe: DatePipe) { }

  ngOnInit(): void {
  }

  search() {
console.log("start date time",this.StartDateTime)

this.StartDateTime=this.datePipe.transform(this.StartDateTime, 'yyyy-MM-dd HH:mm:ss')

let str1=".000"
let datetime=this.StartDateTime.concat(str1);


console.log(datetime)

    this.service.getAllSearchSchedule(this.FromPlace, this.ToPlace,datetime,this.Way).subscribe(data => {
      console.log(data)
      this.scheduleDetails = data
    },
      function (err): void {
        console.log(err);
      });
  }

  BookTicketOpen(scheduleData1: Schedule1) {
    this.scheduledata = scheduleData1
   
    this.statusCode = 0
    this.getSchduleId()
    console.log(this.scheduledata)
  }

  BookTicket() {
    this.bookingdata.UserId = Number(localStorage.getItem("userId"))
    this.bookingdata.ScheduedId = this.scheduledata.id
    this.bookingdata.Cost = this.scheduledata.ticketCost
    this.bookingdata.IsCanceled = 0
    this.bookingdata.CreatedModifiedDate = "2022-05-19T13:39:59.639Z"
    console.log("Book Ticket")
    console.log(this.bookingdata)
    this.service.createBooking(this.bookingdata).subscribe(data => {
      console.log(data)
      if (data) {
        this.statusCode = 201
        this.pnrNumber = JSON.stringify(data)
        this.bookingdata = new Flightbooking()
        this.visible = false
       
        console.log(this.pnrNumber)
      }
    },
      err => {
        console.log(err)

      });
  }

  getSchduleId()
  {
    console.log("in unction")
    console.log(Number(localStorage.getItem("userId")), this.scheduledata.id)
    this.service.getBookingId(Number(localStorage.getItem("userId")), this.scheduledata.id).subscribe(data => {
      console.log(data)
      if(data==null)
      {
        this.visible = true
      }
      else
      {
        this.statusCode=400
        this.pnrNumber=data[0]['pnrNumber']
        this.visible=false
      }
     // this.scheduleDetails = data
    },
      function (err): void {
        console.log(err);
      });
  }


}
