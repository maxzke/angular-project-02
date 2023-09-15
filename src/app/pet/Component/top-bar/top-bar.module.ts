import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './top-bar.component';
import { PetListModule } from '../pet-list/pet-list.module';



@NgModule({
  declarations: [
    TopBarComponent
  ],
  imports: [
    CommonModule,
    PetListModule
  ],
  exports:[
    TopBarComponent
  ]
})
export class TopBarModule { }
