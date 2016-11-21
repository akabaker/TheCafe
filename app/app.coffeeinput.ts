import {Component} from '@angular/core';

@Component({
    selector: 'coffee-input',
    template: `
                <h1>Put dem coffee deets here!</h1>
                   <input [(ngModel)]=coffee.name>
                `
})

export class CoffeeInput {
     coffee: Coffee;

     ngOnInit() {
         this.coffee = new Coffee;
         this.coffee.amount = 0;
         this.coffee.name = 'Potato';
         this.coffee.roast = 'Burnt';
         this.coffee.roaster = 'Spuds';
     }
}

 export class Coffee {
     name: string;
     roaster: string;
     roast: string;
     amount: number;
 }