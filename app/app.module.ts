import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {Inventory} from './inventory/inventory.component'
import {BrewList} from './brewlist/brewlist.component'
import {FormsModule} from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import {CoffeeFilter} from './pipes/coffee.filter';
import {CoffeeOrder} from './pipes/coffee.order';
import { RouterModule, Routes } from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';

const appRoutes: Routes = [
  {path: 'inventory', component: Inventory},
  {path: 'brewlist', component: BrewList},
  {path: '', redirectTo: '/inventory', pathMatch: 'full'}
]

@NgModule({
  imports:      [ RouterModule.forRoot(appRoutes, {enableTracing: true}), //TODO: enable tracing is for debug only
                  BrowserModule,
                  FormsModule,
                  HttpModule,
                  JsonpModule                  
                  ],
  declarations: [AppComponent, Inventory, CoffeeFilter, CoffeeOrder, BrewList],
  bootstrap:    [AppComponent],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }]
})
export class AppModule { }
