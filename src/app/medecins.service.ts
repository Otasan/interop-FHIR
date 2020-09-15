import { Injectable } from '@angular/core';
import { MedecinObj } from './medecin-obj';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedecinsService {
  private apiUrl2 = 'https://fhir.eole-consulting.io/api/practitioner/5f5f8cbe3ef92800151f13a9';
  public currentMedecin : MedecinObj;
  public hasCurrent = false;

  constructor(private http : HttpClient) {}

  public getMedecins() : Observable<MedecinObj>{
    return this.http.get<MedecinObj>(this.apiUrl2)
  }

  public putCurrent(c:MedecinObj) : void{
    this.currentMedecin = c;
    this.hasCurrent= true;
  }




}


