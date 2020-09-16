import { Component, OnInit } from '@angular/core';
import { MedecinsService } from '../medecins.service';
import { MedecinObj } from '../medecin-obj';
import { EnvoiDiagService } from '../envoi-diag.service';
import { DiagnosticObj } from '../diagnostic-obj';
import { FormControl, FormGroup } from '@angular/forms';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-diagnostic',
  templateUrl: './diagnostic.component.html',
  styleUrls: ['./diagnostic.component.css']
})
export class DiagnosticComponent implements OnInit {
  myMedecin: MedecinObj;
  myDiag: DiagnosticObj;
  form = new FormGroup({
    status: new FormControl(''),
    code: new FormControl(''),
    display: new FormControl(''),
    issued: new FormControl(''),
    conclusion: new FormControl('')
  });

  constructor(private _Mservice : MedecinsService, private _Dservice:EnvoiDiagService) { }

  ngOnInit(): void {
    this._Mservice.getMedecins().subscribe(data => {this.myMedecin = data; console.log(data.name[0].given[0]);})
  }

  //addDiagnostic(){
   // this.EnvoiDiagService.addDiag(this.DiagnosticComponent).subscribe(res => {console.log(res);});
 // }

  onSubmit(): void{
    console.log(this.form.value);
    var res :DiagnosticObj = {
      resourceType:"DiagnosticReport",
      code:{
        coding:[{
            system:"",
            code:this.form.value.code,
            display: this.form.value.display
        }]
      },
      subject: {
        reference:"Patient/123456789"
      },
      performer:[{
        actor : {
          reference : "Practitioner/5f5f8cbe3ef92800151f13a9"
        }
      }],
      conclusion : this.form.value.conclusion,
      issued : this.form.value.issued
    };
    console.log(res);
    this._Dservice.addDiagnostic(res).subscribe(data =>{ console.log(data)});
  }
  

}
