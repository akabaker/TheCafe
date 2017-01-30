import {Component} from '@angular/core';
import {Coffee} from './app.coffee'

@Component({
    selector: 'coffee-input',
    templateUrl: 'app/app.coffeeinput.html'
})

export class CoffeeInput {
     coffee: Coffee;

     ngOnInit() {
         this.coffee = new Coffee;
         this.coffee.amount = 0;
         this.coffee.name = 'Potato';
         this.coffee.roast = 'Burnt';
         this.coffee.roaster = 'Spuds';
         this.coffee.color = 'red';
     }

     enterCoffee() {
         this.coffee.color = 'blue';
        }
}