import { Component, OnInit } from '@angular/core';
import { Flightbooking, Flightbooking1, Flightbooking2 } from 'src/app/Models/flightbooking';
import { AdminserviceService } from 'src/app/Service/adminservice.service';

@Component({
  selector: 'app-ticketmodify',
  templateUrl: './ticketmodify.component.html',
  styleUrls: ['./ticketmodify.component.css']
})
export class TicketmodifyComponent implements OnInit {

  Email: string = ""
  ticketDetails: Array<Flightbooking1> = new Array<Flightbooking1>()
  ticketData: Flightbooking = new Flightbooking();
  scheduleDetails: any
  combinedList: any
  combinedList1: Array<Flightbooking2> = new Array<Flightbooking2>()

  constructor(private service: AdminserviceService) { }

  ngOnInit(): void {
  }

  search() {
    this.service.getByEmailId(this.Email).subscribe(data => {
console.log(data)
      this.ticketDetails = data

      this.ticketDetails.forEach(element => {
        let scheduedId = Number(element['scheduedId'])
        this.service.getByScheduleId(scheduedId).subscribe(data1 => {

          this.scheduleDetails = data1

          this.scheduleDetails.scheduleId = this.scheduleDetails.id
          delete this.scheduleDetails.id
          this.combinedList = Object.assign({}, element, this.scheduleDetails)

          this.combinedList1.push(this.combinedList)

          console.log(this.combinedList1)

          this.Email=""

        },
          function (err): void {
            console.log(err);
          });
      });

    },
      function (err): void {
        console.log(err);
      });

  }



}
