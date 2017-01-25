import {Component} from '@angular/core';
import {Coffee} from './app.coffee'

@Component({
    selector: 'coffee-input',
    template: `
                <h1>Put dem coffee deets here!</h1>
                <div [style.color]="coffee.color">
                    Current Coffee details <br />
                    Name: {{coffee.name}}
                </div>
                <input [(ngModel)]=coffee.name><br />
                <input [(ngModel)]=coffee.roaster><br />
                <input [(ngModel)]=coffee.roast><br />
                <input [(ngModel)]=coffee.amount>
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
         this.coffee.color = 'red';
     }
}