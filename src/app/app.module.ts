import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './AdminModule/login/login.component';
import { RegisterComponent } from './AdminModule/register/register.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AlinesComponent } from './AdminModule/ManageAirlines/alines/alines.component';
import { AddairlineComponent } from './AdminModule/ManageAirlines/addairline/addairline.component';
import { SchedulesComponent } from './AdminModule/ManageSchedules/schedules/schedules.component';
import { AddschedulesComponent } from './AdminModule/ManageSchedules/addschedules/addschedules.component';
import { BookingComponent } from './UserModule/Booking/booking/booking.component';
import { TicketmodifyComponent } from './UserModule/ticketmodify/ticketmodify.component';
import { ViewbypnrComponent } from './UserModule/viewbypnr/viewbypnr.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AlinesComponent,
    AddairlineComponent,
    SchedulesComponent,
    AddschedulesComponent,
    BookingComponent,
    TicketmodifyComponent,
    ViewbypnrComponent
  
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
