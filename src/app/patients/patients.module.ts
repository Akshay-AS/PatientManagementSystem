import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientsListComponent } from './patients-list/patients-list.component';
import { patientsRoutingModule } from './patients-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PatientsListComponent
  ],
  imports: [
    CommonModule,
    patientsRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class PatientsModule { }
