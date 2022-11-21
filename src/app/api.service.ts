import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAppointment } from './iappointment';
import { IPatient } from './ipatient';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  private GetPatientsUrl="";
  private GetAppointmentsUrl="";
  private AddPatientUrl="";
  private AddAppointmentUrl="";

  getPatients():Observable<IPatient[]>{
    return this.http.get<IPatient[]>(this.GetPatientsUrl)
  }

  getAppointments():Observable<IAppointment[]>{
    return this.http.get<IAppointment[]>(this.GetAppointmentsUrl)
  }

  setPatient(data:IPatient):Observable<IPatient[]>{
    return this.http.post<IPatient[]>(this.AddPatientUrl,data)
  }

  setAppointment(data:IAppointment):Observable<IAppointment[]>{
    return this.http.post<IAppointment[]>(this.AddAppointmentUrl,data)
  }
}
