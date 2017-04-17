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
     coffees : Coffee[];
     showAdd : boolean;
     errorMessage: string;

     constructor(private _inventoryService: InventoryService) { }

     ngOnInit() {
       this.showAdd = false;
        this._inventoryService.getCoffees().subscribe(coffees => {this.coffees = coffees});
      }

      addCoffee(coffee: Coffee) {
        this._inventoryService.add(coffee).then(coffee => this.coffees.push(coffee));
      }

      updateCoffee(coffee: Coffee) {
        this._inventoryService.update(coffee);
      }

      expandInventory() {
        this.showAdd = true;
      }
}