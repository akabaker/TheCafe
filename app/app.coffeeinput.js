"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var CoffeeInput = (function () {
    function CoffeeInput() {
    }
    CoffeeInput.prototype.ngOnInit = function () {
        this.coffee = new Coffee;
        this.coffee.amount = 0;
        this.coffee.name = 'Potato';
        this.coffee.roast = 'Burnt';
        this.coffee.roaster = 'Spuds';
    };
    CoffeeInput = __decorate([
        core_1.Component({
            selector: 'coffee-input',
            template: "\n                <h1>Put dem coffee deets here!</h1>\n                   <input [(ngModel)]=coffee.name>\n                "
        }), 
        __metadata('design:paramtypes', [])
    ], CoffeeInput);
    return CoffeeInput;
}());
exports.CoffeeInput = CoffeeInput;
var Coffee = (function () {
    function Coffee() {
    }
    return Coffee;
}());
exports.Coffee = Coffee;
//# sourceMappingURL=app.coffeeinput.js.map