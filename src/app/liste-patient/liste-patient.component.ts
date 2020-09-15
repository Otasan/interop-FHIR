import { Component, OnInit } from '@angular/core';
import { PatientObj } from '../patient-obj';
import { PatientsService } from '../patients.service';

@Component({
  selector: 'app-liste-patient',
  templateUrl: './liste-patient.component.html',
  styleUrls: ['./liste-patient.component.css']
})
export class ListePatientComponent implements OnInit {
  myPatients: PatientObj[] = [];

  constructor(private _service : PatientsService) { }

  ngOnInit(): void {
    this._service.getPatients().subscribe(data => {this.myPatients = data;
                                                    console.log(data[0].name[0]);});
  }

  public pClicked(event){
    let index = event.target.parentElement.attributes.id.nodeValue;
    this._service.putCurrent(this.myPatients[index]);
  }

}
