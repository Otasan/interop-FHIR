import { Component, OnInit } from '@angular/core';
import { PatientObj } from '../patient-obj';
import { PatientsService } from '../patients.service';
import { Router } from '@angular/router';
import { ObservationsService } from '../observations.service';
import { ObservationObj } from '../observation-obj';

@Component({
  selector: 'app-fiche-patient',
  templateUrl: './fiche-patient.component.html',
  styleUrls: ['./fiche-patient.component.css']
})
export class FichePatientComponent implements OnInit {
  public myPatient:PatientObj
  public myObser:ObservationObj[];

  constructor(private _Pservice: PatientsService, private _router:Router, private _Oservice: ObservationsService) { }

  ngOnInit(): void {
    if(this._Pservice.hasCurrent){
      this.myPatient = this._Pservice.currentPatient;
      console.log(this.myPatient.generalPractitioner);
      this._Oservice.getObservations(this.myPatient.id).subscribe(data => {this.myObser = data});
    }
    else{
      alert("Aucun patient sélectionné.");
      this._router.navigate(["/ĹistePatients"]);
    }
  }

}
