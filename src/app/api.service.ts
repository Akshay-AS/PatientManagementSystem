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
  private GetPatientsUrl="https://localhost:7295/api/pms/GetPatients";
  private GetAppointmentsUrl="https://localhost:7295/api/pms/GetAppointments";
  private AddPatientUrl="https://localhost:7295/api/pms/AddPatients";
  private AddAppointmentUrl="https://localhost:7295/api/pms/AddAppointment";

  getPatients():Observable<any>{
    return this.http.get<any>(this.GetPatientsUrl)
  }

  getAppointments():Observable<any>{
    return this.http.get<any>(this.GetAppointmentsUrl)
  }

  setPatient(data:IPatient):Observable<any>{
    return this.http.post<IPatient[]>(this.AddPatientUrl,data)
  }

  setAppointment(data:IAppointment):Observable<any>{
    return this.http.post<IAppointment[]>(this.AddAppointmentUrl,data)
  }
}
