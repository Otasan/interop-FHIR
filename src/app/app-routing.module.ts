import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListePatientComponent } from './liste-patient/liste-patient.component';
import { HomeComponent } from './home/home.component';
import {DiagnosticComponent} from './diagnostic/diagnostic.component'

const routes: Routes = [
  { path: '', component : HomeComponent},
  { path: 'home', component : HomeComponent},
  { path: 'ĹistePatients', component : ListePatientComponent},
  { path : 'Diagnostic', component : DiagnosticComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
