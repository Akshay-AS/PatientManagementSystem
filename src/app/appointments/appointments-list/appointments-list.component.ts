import { Component, OnInit } from '@angular/core';
import { IAppointment } from 'src/app/iappointment';
import { FormControl, FormGroup, UntypedFormBuilder, ValidatorFn, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Time } from '@angular/common';



@Component({
  selector: 'app-appointments-list',
  templateUrl: './appointments-list.component.html',
  styleUrls: ['./appointments-list.component.scss']
})
export class AppointmentsListComponent implements OnInit {

  constructor(private formBuilder:UntypedFormBuilder,private httpClient:HttpClient) { }

  patientName:string='';
  StartTime!:Time;
  EndTime!:Time;

  formFields:any[]=[];
  form=new FormGroup({});

  addNewApp:boolean=false;

  appList:IAppointment[]=[];

  ngOnInit(): void {
  }

  showAppointment(i:IAppointment){

  }

  addAppointment(){
    this.addNewApp=true;

  }
  onSubmit(){
    this.addNewApp=false;

  }

}
