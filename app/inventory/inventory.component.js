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
        this._inventoryService.getCoffees().subscribe(function (coffees) { return _this.coffees = _this.filteredCoffees = coffees; });
        this.newCoffee = new coffee_component_1.Coffee;
        this.filter = '';
    };
    Inventory.prototype.addCoffee = function (coffee) {
        var _this = this;
        this._inventoryService.add(coffee).then(function (coffee) { _this.coffees.push(coffee); _this.filter = ''; });
        this.showAdd = false;
        this.newCoffee = new coffee_component_1.Coffee;
    };
    Inventory.prototype.updateCoffee = function (coffee) {
        this._inventoryService.update(coffee);
    };
    Inventory.prototype.deleteCoffee = function (coffee) {
        var _this = this;
        var confirmDelete = confirm("Are you sure you want to delete this coffee?");
        if (confirmDelete) {
            this._inventoryService.delete(coffee).then(function () { return _this.coffees.splice(_this.coffees.indexOf(coffee), 1); });
        }
    };
    Inventory.prototype.cancelAdd = function () {
        this.newCoffee = new coffee_component_1.Coffee;
        this.showAdd = false;
    };
    Inventory.prototype.goToEdit = function (coffee) {
        coffee.editMode = true;
        var containingDiv = $("#coffee_" + coffee.id);
        containingDiv.removeClass("col-md-2");
        containingDiv.addClass("col-md-6");
    };
    Inventory.prototype.goToDisplay = function (coffee) {
        coffee.editMode = false;
        coffee.showOptions = false;
        var containingDiv = $("#coffee_" + coffee.id);
        containingDiv.removeClass("col-md-6");
        containingDiv.addClass("col-md-2");
    };
    return Inventory;
}());
Inventory = __decorate([
    core_1.Component({
        selector: 'inventory',
        templateUrl: 'app/inventory/inventory.component.html',
        providers: [inventory_service_1.InventoryService]
    }),
    __metadata("design:paramtypes", [inventory_service_1.InventoryService])
], Inventory);
exports.Inventory = Inventory;
//# sourceMappingURL=inventory.component.js.map