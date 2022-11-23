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


  formFields:any[]=[];
  form!:FormGroup;

  addNewApp:boolean=false;

  appList:any[]=[];

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
    const newData:any={
    AppointmentId:parseInt(this.form.value.appointmentId),
    PatientId:parseInt(this.form.value.patientId),
    PatientName:this.form.value.patientName,
    StartTime:this.form.value.StartTime,
    EndTime:this.form.value.EndTime,
    }
    console.log(newData);

    this.service.setAppointment(newData)
    .subscribe(addData=>{
      this.appList.push(newData)
      window.location.reload();
    },(error)=>{
      console.log("setapp error")
    })   
  }

  Delete(i:any){
    console.log(i.appointmentId);    
    this.service.deleteAppointment(i.appointmentId).subscribe();
    window.location.reload();

  }

}
