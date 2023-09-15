import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetListComponent } from './pet-list.component';
import { PetAlertsModule } from '../pet-alerts/pet-alerts.module';

@NgModule({
  declarations: [
    PetListComponent,
  ],
  imports: [
    CommonModule,
    PetAlertsModule
  ],
  exports:[
    PetListComponent
  ]
})
export class PetListModule { }
