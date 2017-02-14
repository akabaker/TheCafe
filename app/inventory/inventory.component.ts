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
     coffees: Coffee[]

     constructor(private _inventoryService: InventoryService) { }

     ngOnInit() {
        this.coffees = this._inventoryService.getCoffees();
     }

     expandInventory() {
         this.coffees.push({name: '', roaster: '', roast: '', amount: 0});
     }
}