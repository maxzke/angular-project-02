import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopBarModule } from './pet/Component/top-bar/top-bar.module';
import { PetAddModule } from './pet/Component/pet-add/pet-add.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TopBarModule,
    PetAddModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
