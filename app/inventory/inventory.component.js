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
var coffee_component_1 = require("../coffee/coffee.component");
var inventory_service_1 = require("./inventory.service");
var Inventory = (function () {
    function Inventory(_inventoryService) {
        this._inventoryService = _inventoryService;
        this.title = "Current Inventory";
    }
    Inventory.prototype.ngOnInit = function () {
        var _this = this;
        this.showAdd = false;
        this._inventoryService.getCoffees().subscribe(function (coffees) { _this.coffees = coffees; });
        this.newCoffee = new coffee_component_1.Coffee;
    };
    Inventory.prototype.addCoffee = function (coffee) {
        var _this = this;
        this._inventoryService.add(coffee).then(function (coffee) { return _this.coffees.push(coffee); });
        this.showAdd = false;
        this.newCoffee = new coffee_component_1.Coffee;
    };
    Inventory.prototype.updateCoffee = function (coffee) {
        this._inventoryService.update(coffee);
    };
    Inventory.prototype.deleteCoffee = function (coffee) {
        var _this = this;
        console.log(coffee);
        this._inventoryService.delete(coffee).then(function () { return _this.coffees.splice(_this.coffees.indexOf(coffee), 1); });
    };
    Inventory.prototype.cancelAdd = function () {
        this.newCoffee = new coffee_component_1.Coffee;
        this.showAdd = false;
    };
    return Inventory;
}());
Inventory = __decorate([
    core_1.Component({
        selector: 'inventory',
        templateUrl: 'app/inventory/inventory.component.html',
        providers: [inventory_service_1.InventoryService],
        styleUrls: ['app/content/bootstrap/css/bootstrap-responsive.min.css', 'app/content/bootstrap/css/bootstrap.min.css']
    }),
    __metadata("design:paramtypes", [inventory_service_1.InventoryService])
], Inventory);
exports.Inventory = Inventory;
//# sourceMappingURL=inventory.component.js.map