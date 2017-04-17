import {Coffee} from './coffee.component';
import {InventoryService} from '../inventory/inventory.service';
import {Injectable} from '@angular/core';

@Injectable()
 export class CoffeeList {
     coffees : Coffee[];

     constructor(private _inventoryService: InventoryService) { }

     ngOnInit() {
         this._inventoryService.getCoffees().subscribe(coffees => this.coffees = coffees);
     }

     updateCoffee(coffee: Coffee) {
        this._inventoryService.update(coffee);
      }
}
