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

  FirstName!:string;
  SecondName!:string;
  DOB!:Date;
  SSN!:string;
  email!:string;

  formFields:any[]=[];
  form=new FormGroup({});

  addNewPat:boolean=false;

  patList:IPatient[]=[];
  newData!:IPatient;

  ngOnInit(): void {
    this.subData();
    console.log(this.patList);
  }

  subData(){
    this.service.getPatients()
    .subscribe(response=>{
      this.patList=response
    },(error)=>{
      console.log("patload error");    
    });
  }


  addPatients(){
    this.addNewPat=true;
  }

  onSubmit(){
    this.addNewPat=false;
    this.newData.FirstName=this.FirstName;
    this.newData.SecondName=this.SecondName;
    this.newData.DOB=this.DOB;
    this.newData.SSN=this.SSN;
    this.newData.email=this.email;

    this.service.setPatient(this.newData)
    .subscribe(addData=>{
      this.patList.push(this.newData)
    },(error)=>{
      console.log("setpat error");   
    })

  }
}
