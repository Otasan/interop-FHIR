import { Component, OnInit } from '@angular/core';
import { PatientObj } from '../patient-obj';
import { PatientsService } from '../patients.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fiche-patient',
  templateUrl: './fiche-patient.component.html',
  styleUrls: ['./fiche-patient.component.css']
})
export class FichePatientComponent implements OnInit {
  public myPatient:PatientObj

  constructor(private _service: PatientsService, private _router:Router) { }

  ngOnInit(): void {
    if(this._service.hasCurrent){
      this.myPatient = this._service.currentPatient;
      console.log(this.myPatient.generalPractitioner);
    }
    else{
      alert("Aucun patient sélectionné.");
      this._router.navigate(["/ĹistePatients"]);
    }
  }

}
