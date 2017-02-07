import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {CoffeeInput} from './coffee/app.coffeeinput';
import {Inventory} from './inventory/app.inventory'
import {FormsModule} from '@angular/forms';

@NgModule({
  imports:      [ BrowserModule,
                  FormsModule 
                  ],
  declarations: [AppComponent, CoffeeInput, Inventory],
  bootstrap:    [AppComponent]
})
export class AppModule { }
