import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListePatientComponent } from './liste-patient/liste-patient.component';
import { HomeComponent } from './home/home.component';
import { ZoneDirective } from './zone.directive';
import { HttpClientModule } from '@angular/common/http';
import { DiagnosticComponent } from './diagnostic/diagnostic.component';
import { FichePatientComponent } from './fiche-patient/fiche-patient.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    ListePatientComponent,
    HomeComponent,
    ZoneDirective,
    FichePatientComponent,
    DiagnosticComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
