import {Component} from '@angular/core';
import {Coffee} from '../coffee/coffee.component';
import {Brew} from '../coffee/brew.component';
import {InventoryService} from './inventory.service';
import {BrewService} from './brews.service';

@Component({
    selector: 'inventory',
    templateUrl: 'app/inventory/inventory.component.html',
    providers: [InventoryService, BrewService]
})

export class Inventory {
     title = "Current Inventory";
     coffees : Coffee[];
     showAdd : boolean;
     errorMessage : string;
     newCoffee : Coffee;
     newBrew : Brew;
     showBrew: boolean;
     filteredCoffees : Coffee[];
     filter : string;
     orderBy : string;

     constructor(private _inventoryService: InventoryService, private _brewService: BrewService) { }

     ngOnInit() {
       this.showAdd = false;
        this._inventoryService.getCoffees().subscribe(coffees => this.coffees = this.filteredCoffees = coffees);
        this.newCoffee = new Coffee;
        this.newBrew = new Brew;
        this.filter = '';
        this.orderBy = "default";
      }

      addCoffee(coffee: Coffee) {
        this._inventoryService.add(coffee).then(coffee => {this.coffees.push(coffee); this.filter = '';});
        this.showAdd = false;
        this.newCoffee = new Coffee;
      }

      updateCoffee(coffee: Coffee) {
        this._inventoryService.update(coffee);
        this.goToDisplay(coffee);
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

      goToEdit(coffee: Coffee) {
        coffee.editMode = true;
        var containingDiv = $("#coffee_" + coffee.id);
        containingDiv.removeClass("col-md-2");
        containingDiv.addClass("col-md-6");
      }

      goToDisplay(coffee: Coffee) {
        coffee.editMode = false;
        coffee.showOptions = false;
         var containingDiv = $("#coffee_" + coffee.id);
        containingDiv.removeClass("col-md-6");
        containingDiv.addClass("col-md-2");
      }

      addBrew(brew: Brew) {
        brew.brewedAt = new Date().toLocaleString();
        this._brewService.add(brew);
        this.hideNewBrew();
        this.newBrew = new Brew;
      }

      showNewBrew(coffeeId: number) {
        this.newBrew.coffeeId = coffeeId;
        this.showBrew = true;
      }

      hideNewBrew() {
        this.showBrew = false;
      }
}