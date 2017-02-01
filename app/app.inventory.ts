import {Component} from '@angular/core';
import {Coffee} from './component.coffee/app.coffee'

@Component({
    selector: 'inventory',
    templateUrl: 'app/app.inventory.html'
})

export class Inventory {
     title = "Current Inventory";
     coffees: Coffee[]


     ngOnInit() {
        this.coffees = [
            {name: 'La Falda', roaster: 'Your Mother', roast: 'dark', amount: 123}
        ]
     }
}