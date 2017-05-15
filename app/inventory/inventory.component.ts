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
     errorMessage : string;
     newCoffee : Coffee;
     filteredCoffees : Coffee[];
     filter : string;

     constructor(private _inventoryService: InventoryService) { }

     ngOnInit() {
       this.showAdd = false;
        this._inventoryService.getCoffees().subscribe(coffees => this.coffees = this.filteredCoffees = coffees);
        this.newCoffee = new Coffee;
        this.filter = '';
      }

      addCoffee(coffee: Coffee) {
        this._inventoryService.add(coffee).then(coffee => {this.coffees.push(coffee); this.filter = '';});
        this.showAdd = false;
        this.newCoffee = new Coffee;
      }

      updateCoffee(coffee: Coffee) {
        this._inventoryService.update(coffee);
      }

      deleteCoffee(coffee: Coffee) {
        var confirmDelete = confirm("Are you sure you want to delete this coffee?")
        
        if (confirmDelete) {        
          this._inventoryService.delete(coffee).then(() => this.coffees.splice(this.coffees.indexOf(coffee), 1));
        }
      }

      cancelAdd() {
        this.newCoffee = new Coffee;
        this.showAdd = false;
      }

      // applyFilter() {
      //   if (this.filter != '') {
      //     var lowerFilter = this.filter.toLowerCase();
      //     this.filteredCoffees = this.coffees.filter(coffee => coffee.name.toLowerCase().includes(lowerFilter) || coffee.roaster.toLowerCase().includes(lowerFilter) || coffee.roast.toLowerCase().includes(lowerFilter));
      //   } else {
      //     this.filteredCoffees = this.coffees;
      //   }
      //}
}