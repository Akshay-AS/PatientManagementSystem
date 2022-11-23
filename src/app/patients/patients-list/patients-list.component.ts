import { Component, OnInit } from '@angular/core';
import { IPatient } from 'src/app/ipatient';
import { FormControl, FormGroup, UntypedFormBuilder, ValidatorFn, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.scss']
})
export class PatientsListComponent implements OnInit {

  constructor(private formBuilder: UntypedFormBuilder, private httpClient: HttpClient, private service: ApiService) { }


  formFields: any[] = [];
  form!: FormGroup;

  addNewPat: boolean = false;

  patList: IPatient[] = [];

  ngOnInit(): void {
    this.subData();
    this.form = new FormGroup({
      patientId: new FormControl('', Validators.required),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      dob: new FormControl('', Validators.required),
      ssn: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required)
    });
  }

  subData() {
    this.service.getPatients()
      .subscribe(response => {
        this.patList = response
        console.log(this.patList);

      }, (error) => {
        console.log("patload error");
      });
  }


  addPatients() {
    this.addNewPat = true;
  }

  Delete(i: IPatient) {
    console.log(i);
    this.service.deletePatient(i.patientId).subscribe();
    window.location.reload();
    console.log(i.patientId)
  }

  onSubmit() {
    this.addNewPat = false;
    const newData: IPatient = {
      patientId: parseInt(this.form.value.patientId),
      firstName: this.form.value.firstName,
      lastName: this.form.value.lastName,
      dob: this.form.value.dob,
      ssn: this.form.value.ssn,
      email: this.form.value.email,
      isDeleted: false
    }
    console.log(newData);
    this.service.setPatient(newData)
      .subscribe(addData => {
        this.patList.push(newData)
        window.location.reload();
      }, (error) => {
        console.log("setpat error");
      })

  }
}
