import {Component, Input, OnInit} from '@angular/core';
import {Coffee} from './app.coffee'

@Component({
    selector: 'coffee-input',
    templateUrl: 'app/coffee/app.coffeeinput.html'
})

export class CoffeeInput {
     @Input() coffee: Coffee;

     ngOnInit() {

     }
}