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

  // patientName:string='';
  // StartTime!:string;
  // EndTime!:string;
  // appointmentId!:number;
  // patientId!:number;

  formFields:any[]=[];
  form!:FormGroup;

  addNewApp:boolean=false;

  appList:any[]=[];
  newData!:any;

  ngOnInit(): void {
    this.subData();
    this.form = new FormGroup({
      appointmentId: new FormControl('',Validators.required),
      patientId: new FormControl('',Validators.required),
      patientName: new FormControl('',Validators.required),
      StartTime: new FormControl('',Validators.required),
      EndTime: new FormControl('',Validators.required)
    });
    
  }

  subData(){ 
    this.service.getAppointments()
    .subscribe(response=>{
      this.appList=response
      console.log(this.appList);
    },(error)=>{
      console.log("appload error");
    });
  }

  addAppointment(){
    this.addNewApp=true;
  }
  onSubmit(){
    this.addNewApp=false;
    this.newData.AppointmentId=this.form.value.appointmentId;
    this.newData.PatientId=this.form.value.patientId;
    this.newData.PatientName=this.form.value.patientName;
    this.newData.StartTime=this.form.value.StartTime;
    this.newData.EndTime=this.form.value.EndTime;

    this.service.setAppointment(this.newData)
    .subscribe(addData=>{
      this.appList.push(this.newData)
    },(error)=>{
      console.log("setapp error")
    })   
  }

}
