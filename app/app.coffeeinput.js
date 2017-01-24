"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var app_coffee_1 = require("./app.coffee");
var CoffeeInput = (function () {
    function CoffeeInput() {
    }
    CoffeeInput.prototype.ngOnInit = function () {
        this.coffee = new app_coffee_1.Coffee;
        this.coffee.amount = 0;
        this.coffee.name = 'Potato';
        this.coffee.roast = 'Burnt';
        this.coffee.roaster = 'Spuds';
    };
    return CoffeeInput;
}());
CoffeeInput = __decorate([
    core_1.Component({
        selector: 'coffee-input',
        template: "\n                <h1>Put dem coffee deets here!</h1>\n                   <input [(ngModel)]=coffee.name><br />\n                   <input [(ngModel)]=coffee.roaster><br />\n                   <input [(ngModel)]=coffee.roast><br />\n                   <input [(ngModel)]=coffee.amount>\n                "
    })
], CoffeeInput);
exports.CoffeeInput = CoffeeInput;
//# sourceMappingURL=app.coffeeinput.js.map