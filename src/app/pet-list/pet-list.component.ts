import { Component, Input } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.scss']
})

export class PetListComponent {
  @Input()
  listadoPets:string[] = [];

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
  public  addPets(value:string){
    this.listadoPets.push(value);
  }
  
}
