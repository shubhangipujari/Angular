import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './AdminModule/login/login.component';
import { AlinesComponent } from './AdminModule/ManageAirlines/alines/alines.component';
import { SchedulesComponent } from './AdminModule/ManageSchedules/schedules/schedules.component';
import { RegisterComponent } from './AdminModule/register/register.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'airlines', component: AlinesComponent },
  { path: 'schedules', component: SchedulesComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
