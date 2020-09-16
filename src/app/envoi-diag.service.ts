import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { DiagnosticComponent } from './diagnostic/diagnostic.component';


@Injectable({
  providedIn: 'root'
})
export class EnvoiDiagService {
  private apiUrl3 = 'https://fhir.eole-consulting.io/api/Diagnostic-Report';

  constructor(private http : HttpClient) { }

  getAll(): Observable<Array<DiagnosticComponent>> {
    return this.http.get<Array<DiagnosticComponent>>(this.apiUrl3);
  }
  //addDiagnostic(d: DiagnosticComponent): Observable<DiagnosticComponent> {
    //return this.http.post(this.apiUrl3, d);

  //}
}
