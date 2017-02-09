import {Component} from '@angular/core';
import {Coffee} from '../coffee/coffee.component'

@Component({
    selector: 'inventory',
    templateUrl: 'app/inventory/inventory.component.html'
})

export class Inventory {
     title = "Current Inventory";
     coffees: Coffee[]


     ngOnInit() {
        this.coffees = [
            {name: 'Toasted Southern Pecan', roaster: 'The Grind', roast: 'light', amount: 5},
            {name: 'Toasted Southern Pecan', roaster: 'The Grind', roast: 'light', amount: 5}
        ]
     }

     expandInventory() {
         this.coffees.push({name: '', roaster: '', roast: '', amount: 0});
     }
}