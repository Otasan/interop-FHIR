import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ObservationObj } from './observation-obj';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ObservationsService {
  private apiUrl = "https://fhir.eole-consulting.io/api/observation?subject.reference=Patient/";
  constructor(private http: HttpClient) { }

  public getObservations(id:string) : Observable<ObservationObj[]> {
    let url = this.apiUrl+id;
    return this.http.get<ObservationObj[]>(url);
  }
}
