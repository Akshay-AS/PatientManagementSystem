import { Component, OnInit } from '@angular/core';
import { IAppointment } from 'src/app/iappointment';
import { FormControl, FormGroup, UntypedFormBuilder, ValidatorFn, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Time } from '@angular/common';
import { ApiService } from 'src/app/api.service';



@Component({
  selector: 'app-appointments-list',
  templateUrl: './appointments-list.component.html',
  styleUrls: ['./appointments-list.component.scss']
})
export class AppointmentsListComponent implements OnInit {

  constructor(private formBuilder:UntypedFormBuilder,private httpClient:HttpClient,private service:ApiService) { }

  patientName:string='';
  StartTime!:Date;
  EndTime!:Date;
  appointmentId!:number;
  patientId!:number;

  formFields:any[]=[];
  form=new FormGroup({});

  addNewApp:boolean=false;

  appList:IAppointment[]=[];
  newData!:IAppointment;

  ngOnInit(): void {
    this.subData();
    console.log(this.appList);
    
  }

  subData(){ 
    this.service.getAppointments()
    .subscribe(response=>{
      this.appList=response
    },(error)=>{
      console.log("appload error");
    });
  }

  addAppointment(){
    this.addNewApp=true;
  }
  onSubmit(){
    this.addNewApp=false;
    this.newData.AppointmentId=this.appointmentId;
    this.newData.PatientId=this.patientId;
    this.newData.PatientName=this.patientName;
    this.newData.StartTime=this.StartTime;
    this.newData.EndTime=this.EndTime;

    this.service.setAppointment(this.newData)
    .subscribe(addData=>{
      this.appList.push(this.newData)
    },(error)=>{
      console.log("setapp error")
    })   
  }

}
