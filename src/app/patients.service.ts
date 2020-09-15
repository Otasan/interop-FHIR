import { Injectable } from '@angular/core';
import { PatientObj } from './patient-obj';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {
  private apiUrl = 'https://fhir.eole-consulting.io/api/patient';
  public currentPatient : PatientObj;
  public hasCurrent = false;

  constructor( private http: HttpClient) { }

  public getAll() : PatientObj[]{
    let res : PatientObj[] = [];
    this.getPatients().subscribe(data => {res = data});
    return res;
  }

  public getPatients() : Observable<PatientObj[]> {
    return this.http.get<PatientObj[]>(this.apiUrl)
  }

  public putCurrent(c:PatientObj) : void{
    this.currentPatient = c;
    this.hasCurrent= true;
  }

  public removeCurrent() : void{
    this.hasCurrent = false;
  }
}
