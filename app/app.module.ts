import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {Inventory} from './inventory/inventory.component'
import {BrewList} from './brewlist/brewlist.component'
import {FormsModule} from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import {CoffeeFilter} from './pipes/coffee.filter';
import {CoffeeOrder} from './pipes/coffee.order';

@NgModule({
  imports:      [ BrowserModule,
                  FormsModule,
                  HttpModule,
                  JsonpModule
                  ],
  declarations: [AppComponent, Inventory, CoffeeFilter, CoffeeOrder, BrewList],
  bootstrap:    [AppComponent],
})
export class AppModule { }
