import { Component } from '@angular/core';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.scss']
})

export class PetListComponent {
  
  private _pets:string[] = ["cat","dog","cock","hen","chick","pig"];

  constructor(){
     
  }

  private _nombre: string = "mi nombre";

  public get pets(): string[]{
    return this._pets;
  }
  public set pets(value:string[]){
    this._pets = value;
  }
  public  addPets(value:string){
    this._pets.push(value);
  }
  
}
