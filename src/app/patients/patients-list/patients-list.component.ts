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

  constructor(private formBuilder:UntypedFormBuilder,private httpClient:HttpClient,private service:ApiService) { }

  // FirstName!:string;
  // SecondName!:string;
  // DOB!:string;
  // SSN!:string;
  // email!:string;
  // PatientId!:number;

  formFields:any[]=[];
  form!:FormGroup;

  addNewPat:boolean=false;

  patList:any[]=[];
  newData!:IPatient;

  ngOnInit(): void {
    this.subData();
    this.form = new FormGroup({
      PatientId: new FormControl('',Validators.required),
      FirstName: new FormControl('',Validators.required),
      SecondName: new FormControl('',Validators.required),
      DOB: new FormControl('',Validators.required),
      SSN: new FormControl('',Validators.required),
      email: new FormControl('',Validators.required)

    });
  }

  subData(){
    this.service.getPatients()
    .subscribe(response=>{
      this.patList=response
      console.log(this.patList);

    },(error)=>{
      console.log("patload error");    
    });
  }


  addPatients(){
    this.addNewPat=true;
  }

  onSubmit(){
    this.addNewPat=false;
    this.newData.PatientID=this.form.value.PatientId;
    this.newData.FirstName=this.form.value.FirstName;
    this.newData.SecondName=this.form.value.SecondName;
    this.newData.DOB=this.form.value.DOB;
    this.newData.SSN=this.form.value.SSN;
    this.newData.email=this.form.value.email;
    console.log(this.newData);
    
    this.service.setPatient(this.newData)
    .subscribe(addData=>{
      this.patList.push(this.newData)
    },(error)=>{
      console.log("setpat error");   
    })

  }
}
