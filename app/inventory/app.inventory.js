"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var Inventory = (function () {
    function Inventory() {
        this.title = "Current Inventory";
    }
    Inventory.prototype.ngOnInit = function () {
        this.coffees = [
            { name: 'Toasted Southern Pecan', roaster: 'The Grind', roast: 'light', amount: 5 },
            { name: 'Toasted Southern Pecan', roaster: 'The Grind', roast: 'light', amount: 5 }
        ];
    };
    return Inventory;
}());
Inventory = __decorate([
    core_1.Component({
        selector: 'inventory',
        templateUrl: 'app/inventory/app.inventory.html'
    })
], Inventory);
exports.Inventory = Inventory;
//# sourceMappingURL=app.inventory.js.map