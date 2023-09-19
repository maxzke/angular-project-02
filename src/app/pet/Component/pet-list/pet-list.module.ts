import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetListComponent } from './pet-list.component';
import { PetAlertsModule } from '../pet-alerts/pet-alerts.module';
import { PetAddModule } from '../pet-add/pet-add.module';

@NgModule({
  declarations: [
    PetListComponent,
  ],
  imports: [
    CommonModule,
    PetAlertsModule,
    PetAddModule
  ],
  exports:[
    PetListComponent
  ]
})
export class PetListModule { }
