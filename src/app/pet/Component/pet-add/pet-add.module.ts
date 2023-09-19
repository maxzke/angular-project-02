import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PetAddComponent } from './pet-add.component';



@NgModule({
  declarations: [PetAddComponent],
  exports:[PetAddComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class PetAddModule { }
