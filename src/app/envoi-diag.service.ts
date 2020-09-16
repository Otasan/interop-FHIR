import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { DiagnosticComponent } from './diagnostic/diagnostic.component';
import { DiagnosticObj } from './diagnostic-obj';


@Injectable({
  providedIn: 'root'
})
export class EnvoiDiagService {
  private apiUrl3 = 'https://fhir.eole-consulting.io/api/Diagnostic-Report';

  constructor(private http : HttpClient) { }

  getAll(): Observable<DiagnosticObj[]> {
    return this.http.get<DiagnosticObj[]>(this.apiUrl3);
  }
  addDiagnostic(d: DiagnosticObj): Observable<DiagnosticObj> {
    return this.http.post<DiagnosticObj>(this.apiUrl3, d);
  }
}
