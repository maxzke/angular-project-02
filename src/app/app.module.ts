import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { PetListComponent } from './pet-list/pet-list.component';
import { PetAlertsComponent } from './pet-alerts/pet-alerts.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    PetListComponent,
    PetAlertsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
