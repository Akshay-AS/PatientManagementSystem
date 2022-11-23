import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAppointment } from './iappointment';
import { IPatient } from './ipatient';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  httpClient: any;

  constructor(private http: HttpClient) { }
  private patientsUrl = "https://localhost:7295/api/patients";
  private appointmentsUrl = "https://localhost:7295/api/appointments";

  getPatients(): Observable<any> {
    return this.http.get<any>(this.patientsUrl)
  }

  getAppointments(): Observable<any> {
    return this.http.get<any>(this.appointmentsUrl)
  }

  setPatient(data: IPatient): Observable<any> {
    return this.http.post<IPatient[]>(this.patientsUrl, data)
  }

  setAppointment(data: IAppointment): Observable<any> {
    return this.http.post<IAppointment[]>(this.appointmentsUrl, data)
  }

  deleteAppointment(id: any) {
    return this.http.delete(this.appointmentsUrl + '/' + id, id)
  }

  deletePatient(id: any) {
    return this.http.put(this.patientsUrl + '/' + id, id)

  }

}
