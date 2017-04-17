import {Component} from '@angular/core';
import {Coffee} from '../coffee/coffee.component';
import {InventoryService} from './inventory.service';
import {CoffeeList} from '../coffee/coffeelist';
@Component({
    selector: 'inventory',
    templateUrl: 'app/inventory/inventory.component.html',
    providers: [CoffeeList, InventoryService]
})

export class Inventory {
     title = "Current Inventory";
     errorMessage: string;

     constructor(public coffeeList : CoffeeList) { }

     ngOnInit() {
        this.coffeeList.ngOnInit();
      }

      addCoffee(coffee: Coffee) {
        
      }

      updateCoffee(coffee: Coffee) {
        //this._coffeeList.updateCoffee(coffee);
      }
}