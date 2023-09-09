import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.scss']
})

export class PetListComponent {
  @Input()
  listadoPets:string[] = [];


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
