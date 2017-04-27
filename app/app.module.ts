import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {Inventory} from './inventory/inventory.component'
import {FormsModule} from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

@NgModule({
  imports:      [ BrowserModule,
                  FormsModule,
                  HttpModule,
                  JsonpModule
                  ],
  declarations: [AppComponent, Inventory],
  bootstrap:    [AppComponent],
})
export class AppModule { }
