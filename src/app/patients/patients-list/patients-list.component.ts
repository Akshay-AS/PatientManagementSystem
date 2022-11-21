import { Component, OnInit } from '@angular/core';
import { IPatient } from 'src/app/ipatient';
import { FormControl, FormGroup, UntypedFormBuilder, ValidatorFn, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.scss']
})
export class PatientsListComponent implements OnInit {

  constructor(private formBuilder:UntypedFormBuilder,private httpClient:HttpClient) { }

  FirstName!:string;
  SecondName!:string;
  DOB!:Date;
  SSN!:string;
  email!:string;

  formFields:any[]=[];
  form=new FormGroup({});

  addNewPat:boolean=false;

  patList:IPatient[]=[];

  ngOnInit(): void {
  }

  showPatient(i:IPatient){

  }

  addPatients(){
    this.addNewPat=true;
  }

  onSubmit(){
    this.addNewPat=false;

  }
}
