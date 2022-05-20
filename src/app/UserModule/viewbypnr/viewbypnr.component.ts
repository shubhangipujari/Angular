import { Component, OnInit } from '@angular/core';
import { merge } from 'rxjs';
import { Flightbooking1, Flightbooking, Flightbooking2 } from 'src/app/Models/flightbooking';
import { AdminserviceService } from 'src/app/Service/adminservice.service';

@Component({
  selector: 'app-viewbypnr',
  templateUrl: './viewbypnr.component.html',
  styleUrls: ['./viewbypnr.component.css']
})
export class ViewbypnrComponent implements OnInit {

  pnrNumber:string=""
  ticketDetails: any
  scheduleDetails:any
  scheduedId:number
  ticketData:Flightbooking=new Flightbooking();
  combinedList:Array<Flightbooking2> = new Array<Flightbooking2>()
  constructor(private service:AdminserviceService) { }

  ngOnInit(): void {
  }

  search()
  {
    this.service.getByPnrNumber(this.pnrNumber).subscribe(data => {
      console.log("pnr number")
      console.log(data)
     this.ticketDetails = data


      this.scheduedId=this.ticketDetails[0]['scheduedId']
      console.log("ScheduleId"+this.scheduedId)
     this.service.getByScheduleId( Number(this.scheduedId) ).subscribe(data1 => {
      console.log(data1)
     this.scheduleDetails = data1  
     
     this.scheduleDetails.scheduleId=this.scheduleDetails.id
      delete this.scheduleDetails.id
   this.combinedList= [Object.assign({},this.ticketDetails[0],this.scheduleDetails)]

     console.log(this.combinedList)
     //this.pnrNumber=""


    },
      function (err): void {
        console.log(err);
      });
    },
      function (err): void {
        console.log(err);
      });

  }

  cancelTicket(data:Flightbooking1)
  {
    this.ticketData.Id=data.id
    this.ticketData.ScheduedId=this.scheduedId
    this.ticketData.UserId=data.userId
    this.ticketData.MealPreferene=data.mealPreferene
    this.ticketData.Cost=data.cost
    this.ticketData.SeatNumber=data.seatNumber
    this.ticketData.PnrNumber=data.pnrNumber
    this.ticketData.IsCanceled=1
    this.ticketData.CreatedModifiedDate=data.createdModifiedDate

    console.log(this.ticketData)

      this.service.updateBooking(this.ticketData).subscribe(data => {
       // console.log(data)
        this.search();

      },
        err => {
          console.log(err)

        });

  }

}
