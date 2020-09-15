import { Component, OnInit } from '@angular/core';
import { MedecinsService } from '../medecins.service';
import { MedecinObj } from '../medecin-obj';



@Component({
  selector: 'app-diagnostic',
  templateUrl: './diagnostic.component.html',
  styleUrls: ['./diagnostic.component.css']
})
export class DiagnosticComponent implements OnInit {
  myMedecin: MedecinObj;


  constructor(private _service : MedecinsService) { }

  ngOnInit(): void {
    this._service.getMedecins().subscribe(data => {this.myMedecin = data; console.log(data.name[0].given[0]);})
  }

  

}
