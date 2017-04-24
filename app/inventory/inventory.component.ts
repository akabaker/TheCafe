import {Component} from '@angular/core';
import {Coffee} from '../coffee/coffee.component';
import {InventoryService} from './inventory.service';

@Component({
    selector: 'inventory',
    templateUrl: 'app/inventory/inventory.component.html',
    providers: [InventoryService],
    styleUrls: ['app/content/bootstrap/css/bootstrap-responsive.min.css', 'app/content/bootstrap/css/bootstrap.min.css']   
})

export class Inventory {
     title = "Current Inventory";
     coffees : Coffee[];
     showAdd : boolean;
     errorMessage: string;
     newCoffee: Coffee;

     constructor(private _inventoryService: InventoryService) { }

     ngOnInit() {
       this.showAdd = false;
        this._inventoryService.getCoffees().subscribe(coffees => {this.coffees = coffees});
        this.newCoffee = new Coffee;
      }

      addCoffee(coffee: Coffee) {
        this._inventoryService.add(coffee).then(coffee => this.coffees.push(coffee));
        this.showAdd = false;
        this.newCoffee = new Coffee;
      }

      updateCoffee(coffee: Coffee) {
        this._inventoryService.update(coffee);
      }

      deleteCoffee(coffee: Coffee) {
        console.log(coffee);
        this._inventoryService.delete(coffee).then(() => this.coffees.splice(this.coffees.indexOf(coffee), 1));
      }

      cancelAdd() {
        this.newCoffee = new Coffee;
        this.showAdd = false;
      }
}