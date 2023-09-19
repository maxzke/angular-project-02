import { Component } from '@angular/core';
import { Pet } from '../../Inteface/pet.interface';

@Component({
  selector: 'app-pet-add',
  templateUrl: './pet-add.component.html',
  styleUrls: ['./pet-add.component.scss']
})
export class PetAddComponent {
  public pet:Pet={name:""}
}
