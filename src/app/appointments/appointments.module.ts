import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentsListComponent } from './appointments-list/appointments-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { appointmentsRoutingModule } from './appointments-routing.module';



@NgModule({
  declarations: [
    AppointmentsListComponent
  ],
  imports: [
    CommonModule,
    appointmentsRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AppointmentsModule { }
