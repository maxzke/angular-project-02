import { Component } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {
  private _farm: string[] = ["cat", "dog", "cock", "hen", "chick", "pig"];
  public get farm(): string[] {
    return this._farm;
  }
  public set farm(value: string[]) {
    this._farm = value;
  }
  private _sea: string[] = ["tiburon", "ballena", "tortuga", "cocodrilo", "patricio", "delfin"];
  public get sea(): string[] {
    return this._sea;
  }
  constructor(){
    this._mostrarListado = [...this.farm,...this.sea];
  }
  public set sea(value: string[]) {
    this._sea = value;
  }
  
  private _mostrarListado: string[] = [];

  public get mostrarListado(): string[] {
    return this._mostrarListado;
  }
  public set mostrarListado(value: string[]) {
    this._mostrarListado = value;
  }
  public selectFarm(){
    this._mostrarListado = this.farm;
  }
  public selectSea(){
    this._mostrarListado = this.sea;
  }



}
