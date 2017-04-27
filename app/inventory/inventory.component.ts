import {Component} from '@angular/core';
import {Coffee} from '../coffee/coffee.component';
import {CoffeeEdit} from '../coffee/editable.coffee';
import {InventoryService} from './inventory.service';

@Component({
    selector: 'inventory',
    templateUrl: 'app/inventory/inventory.component.html',
    providers: [InventoryService]
})

export class Inventory {
     title = "Current Inventory";
     coffees : CoffeeEdit[];
     showAdd : boolean;
     errorMessage: string;
     newCoffee: Coffee;

     constructor(private _inventoryService: InventoryService) { }

     ngOnInit() {
       this.showAdd = false;
        this._inventoryService.getCoffees().subscribe(coffees => {this.coffees = this.mapToEditArray(coffees)});
        this.newCoffee = new Coffee;
      }

      addCoffee(coffee: Coffee) {
        this._inventoryService.add(coffee).then(coffee => this.coffees.push(this.mapToEdit(coffee)));
        this.showAdd = false;
        this.newCoffee = new Coffee;
      }

      updateCoffee(coffeeEdit: CoffeeEdit) {
        this._inventoryService.update(coffeeEdit.coffee);
        coffeeEdit.edit = false;
      }

      deleteCoffee(coffeeEdit: CoffeeEdit) {
        //console.log(coffee);
        this._inventoryService.delete(coffeeEdit.coffee).then(() => this.coffees.splice(this.coffees.indexOf(coffeeEdit), 1));
      }

      cancelAdd() {
        this.newCoffee = new Coffee;
        this.showAdd = false;
      }

      mapToEditArray(coffees : Coffee[]) : CoffeeEdit[] {
        var editList = new Array<CoffeeEdit>();

        coffees.forEach(function(coffee) 
        {
          var editCoffee = new CoffeeEdit;
          editCoffee.edit = false;
          editCoffee.coffee = coffee;
          editList.push(editCoffee);
        });

        return editList;
      }

      mapToEdit(coffee: Coffee) : CoffeeEdit {
        var editCoffee = new CoffeeEdit
        editCoffee.edit = false;
        editCoffee.coffee = coffee;

        return editCoffee;
      }
}