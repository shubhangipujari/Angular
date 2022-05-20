import { Component, OnInit } from '@angular/core';
import { Airline, Airline1 } from 'src/app/Models/airline';
import { AdminserviceService } from 'src/app/Service/adminservice.service';

@Component({
  selector: 'app-alines',
  templateUrl: './alines.component.html',
  styleUrls: ['./alines.component.css']
})
export class AlinesComponent implements OnInit {

  constructor(private service: AdminserviceService) { }
  airlineData: Airline = new Airline();
  airlineDetails: Array<Airline1> = new Array<Airline1>()
  Id: number = 0

  ngOnInit(): void {
    this.getAllAirlines()

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

  Save() {

    if (this.Id != 0) {
      console.log("update")
      this.service.updateAirline(this.airlineData).subscribe(data => {
        this.getAllAirlines();
        this.airlineData = new Airline();
        this.Id = 0

      },
        err => {
          console.log(err)

        });
    }
    else {
      console.log("insert")

      this.service.createAirline(this.airlineData).subscribe(data => {
        console.log(data)
        this.getAllAirlines();
        if (data) {

          this.airlineData = new Airline();
        }
      },
        err => {
          console.log(err)

        });
    }
  }

  edit(editData: Airline1) {
    console.log(editData)
    this.Id = editData.id
    this.airlineData.Id = editData.id
    this.airlineData.AirlineName = editData.airlineName
    this.airlineData.Logo = editData.logo
    this.airlineData.ContactNumber = editData.contactNumber
    this.airlineData.ContactAddress = editData.contactAddress
    this.airlineData.IsBlocked = editData.isBlocked

  }








}
