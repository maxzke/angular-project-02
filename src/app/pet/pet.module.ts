import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarModule } from './Component/top-bar/top-bar.module';
import { TopBarComponent } from './Component/top-bar/top-bar.component';
import { PetListComponent } from './Component/pet-list/pet-list.component';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
  ],
  exports:[
  ]
})
export class PetModule { }
