import { Component, Input } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Pet } from '../../Inteface/pet.interface';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.scss']
})

export class PetListComponent {
  @Input()
  public listadoPets:string[] = [];

  //private mascotas:Pet = [];

  private _animal: string = "";
  public get animal(): string {
    return this._animal;
  }
  public set animal(value: string) {
    this._animal = value;
  }

  public get pets(): string[]{
    return this.listadoPets;
  }
  public set pets(value:string[]){
    this.listadoPets = value;
  }
  public  addPets():void{
    let entrada:any = prompt("data", "");
    this.listadoPets.push(entrada);
  }
  
}
