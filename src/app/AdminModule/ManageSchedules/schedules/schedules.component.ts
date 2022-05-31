import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Airline1 } from 'src/app/Models/airline';
import { Schedule, Schedule1 } from 'src/app/Models/schedule';
import { AdminserviceService } from 'src/app/Service/adminservice.service';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.css'],
  providers: [DatePipe]
})
export class SchedulesComponent implements OnInit {

  scheduleData: Schedule = new Schedule();
  airlineDetails: Array<Airline1> = new Array<Airline1>()
  scheduleDetails: Array<Schedule1> = new Array<Schedule1>()
  Id: number = 0



  constructor(private service: AdminserviceService,private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.getAllAirlines()
    this.getAllSchedules()
  }
  getAllAirlines() {

    this.service.getAllAirlines().subscribe(data => {
      console.log(data)
      this.airlineDetails = data

    },

      function (err): void {
        console.log(err);
      });
  }

  getAllSchedules() {
    this.service.getAllSchedules().subscribe(data => {
      console.log(data)
      this.scheduleDetails = data
    },
      function (err): void {
        console.log(err);
      });
  }
  edit(data: Schedule1) {
    console.log(data)
    this.Id = data.id
    this.scheduleData.Id = data.id
    this.scheduleData.FlightNumber = data.flightNumber
    this.scheduleData.FlightName = data.flightName
    this.scheduleData.FromPlace = data.fromPlace
    this.scheduleData.ToPlace = data.toPlace
    this.scheduleData.StartDateTime =  data.startDateTime
    this.scheduleData.EndDateTime = data.endDateTime
    this.scheduleData.ScheduledDays = data.scheduledDays
    this.scheduleData.InstrumentUsed = data.instrumentUsed
    this.scheduleData.TotNumBuisSeat = data.totNumBuisSeat
    this.scheduleData.TotNumNonbuisSeat = data.totNumNonbuisSeat
    this.scheduleData.TicketCost = data.ticketCost
    this.scheduleData.NumberOfRows = data.numberOfRows
    this.scheduleData.Meal = data.meal
    this.scheduleData.ChooseWay = data.chooseWay
  }

  // getAirlineName(id:number)
  // {
  //   return this.scheduleDetails.find(x => x.id === id)?.airlineName;
  // }

  Save() {


 // this.scheduleData.StartDateTime=this.datePipe.transform(this.scheduleData.StartDateTime, 'yyyy-MM-dd HH:mm:ss')

 // this.scheduleData.EndDateTime=this.datePipe.transform(this.scheduleData.EndDateTime, 'yyyy-MM-dd HH:mm:ss')

    if (this.Id != 0) {
      console.log("update")
      this.service.updateSchdule(this.scheduleData).subscribe(data => {
        this.getAllSchedules();
        this.scheduleData = new Schedule();
        this.Id = 0

      },
        err => {
          console.log(err)

        });
    }
    else {
      console.log("insert")

      this.service.createSchedule(this.scheduleData).subscribe(data => {
        console.log(data)
        this.getAllSchedules();
        if (data) {

          this.scheduleData = new Schedule();
        }
      },
        err => {
          console.log(err)

        });
    }
  }


}
