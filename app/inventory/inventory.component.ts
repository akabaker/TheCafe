import {Component} from '@angular/core';
import {Coffee} from '../coffee/coffee.component';
import {InventoryService} from './inventory.service';
@Component({
    selector: 'inventory',
    templateUrl: 'app/inventory/inventory.component.html',
    providers: [InventoryService]
})

export class Inventory {
     title = "Current Inventory";
     coffees: Coffee[];
     errorMessage: string;

     constructor(private _inventoryService: InventoryService) { }

     ngOnInit() {
        this._inventoryService.getCoffees().subscribe(coffees => {this.coffees = coffees; console.log('POTATOES', this.coffees)}, error => this.errorMessage = <any>error);

     }

      expandInventory() {
    //      this.coffees.push({name: '', roaster: '', roast: '', amount: 0});
      }

      updateCoffee(coffee: Coffee) {
        this._inventoryService.update(coffee);
      }
}