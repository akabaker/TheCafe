import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {Inventory} from './inventory/inventory.component'
import {FormsModule} from '@angular/forms';

@NgModule({
  imports:      [ BrowserModule,
                  FormsModule 
                  ],
  declarations: [AppComponent, Inventory],
  bootstrap:    [AppComponent]
})
export class AppModule { }
