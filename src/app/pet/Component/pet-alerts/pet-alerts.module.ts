import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetAlertsComponent } from './pet-alerts.component';



@NgModule({
  declarations: [
    PetAlertsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    PetAlertsComponent
  ]
})
export class PetAlertsModule { }
