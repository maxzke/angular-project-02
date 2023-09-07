import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pet-alerts',
  templateUrl: './pet-alerts.component.html',
  styleUrls: ['./pet-alerts.component.scss']
})
export class PetAlertsComponent {
  @Input()
  pet: string="";
  public cont:number = 0
  
  public share(){

    alert("Pet name:"+this.pet);
  }

}
