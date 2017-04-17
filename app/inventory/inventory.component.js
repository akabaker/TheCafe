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
var core_1 = require("@angular/core");
var inventory_service_1 = require("./inventory.service");
var coffeelist_1 = require("../coffee/coffeelist");
var Inventory = (function () {
    function Inventory(coffeeList) {
        this.coffeeList = coffeeList;
        this.title = "Current Inventory";
    }
    Inventory.prototype.ngOnInit = function () {
        this.coffeeList.ngOnInit();
    };
    Inventory.prototype.addCoffee = function (coffee) {
    };
    Inventory.prototype.updateCoffee = function (coffee) {
        //this._coffeeList.updateCoffee(coffee);
    };
    return Inventory;
}());
Inventory = __decorate([
    core_1.Component({
        selector: 'inventory',
        templateUrl: 'app/inventory/inventory.component.html',
        providers: [coffeelist_1.CoffeeList, inventory_service_1.InventoryService]
    }),
    __metadata("design:paramtypes", [coffeelist_1.CoffeeList])
], Inventory);
exports.Inventory = Inventory;
//# sourceMappingURL=inventory.component.js.map