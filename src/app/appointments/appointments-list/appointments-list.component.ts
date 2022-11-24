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

  constructor(private service: ApiService) { }

  formFields: any[] = [];
  form!: FormGroup;
  addNewApp: boolean = false;
  appList: IAppointment[] = [];

  ngOnInit(): void {
    this.subData();
    this.form = new FormGroup({
      appointmentId: new FormControl('', Validators.required),
      patientId: new FormControl('', Validators.required),
      appointmentDate: new FormControl('', Validators.required),
      startTime: new FormControl('', Validators.required),
      endTime: new FormControl('', Validators.required)
    });
  }

  subData() {
    this.service.getAppointments()
      .subscribe(response => {
        this.appList = response
      }, (error) => {
        console.log("appload error");
      });
  }

  addAppointment() {
    this.addNewApp = true;
  }

  onSubmit() {
    this.addNewApp = false;
    const newData: IAppointment = {
      appointmentId: parseInt(this.form.value.appointmentId),
      patientId: parseInt(this.form.value.patientId),
      appointmentDate: this.form.value.appointmentDate,
      startTime: this.form.value.startTime,
      endTime: this.form.value.endTime,
    }
    console.log(newData);
    this.service.setAppointment(newData)
      .subscribe(addData => {
        this.appList.push(addData)
      }, (error) => {
        console.log("setapp error")
      })
    
  }

  Delete(i: IAppointment) {
    console.log(i.appointmentId);
    this.service.deleteAppointment(i.appointmentId).subscribe();
    window.location.reload();
  }
}