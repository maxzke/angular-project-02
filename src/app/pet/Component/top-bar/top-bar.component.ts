import { Component } from '@angular/core';
import { Pet } from '../../Inteface/pet.interface';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {
  private _farm: Pet[] = [{name:"chick",type:"mar"}];
  // ["cat", "dog", "cock", "hen", "chick", "pig"];
  public get farm(): Pet[] {
    return this._farm;
  }
  public set farm(value: Pet[]) {
    this._farm = value;
  }
  private _sea: Pet[] = [{name:"tiburon",type:"mar"}];
  // ["tiburon", "ballena", "tortuga", "cocodrilo", "patricio", "delfin"];
  public get sea(): Pet[] {
    return this._sea;
  }
  public set sea(value: Pet[]) {
    this._sea = value;
  }

  constructor(){
    this._mostrarListado = [...this.farm,...this.sea];
  }
  
  private _mostrarListado: Pet[] = [];

  public get mostrarListado(): Pet[] {
    return this._mostrarListado;
  }
  public set mostrarListado(value: Pet[]) {
    this._mostrarListado = value;
  }
  public selectFarm(){
    this.mostrarListado = this.farm;
  }
  public selectSea(){
    this._mostrarListado = this.sea;
  }



}
