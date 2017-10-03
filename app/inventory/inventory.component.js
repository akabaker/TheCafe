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
var brew_component_1 = require("../coffee/brew.component");
var inventory_service_1 = require("../services/inventory.service");
var brews_service_1 = require("../services/brews.service");
var Inventory = (function () {
    function Inventory(_inventoryService, _brewService) {
        this._inventoryService = _inventoryService;
        this._brewService = _brewService;
        this.title = "Current Inventory";
    }
    Inventory.prototype.ngOnInit = function () {
        var _this = this;
        this.showAdd = false;
        this._inventoryService.getCoffees().subscribe(function (coffees) { return _this.coffees = _this.filteredCoffees = coffees; });
        this._brewService.getBrews().subscribe(function (brews) { return _this.brews = brews; });
        this.newCoffee = new coffee_component_1.Coffee;
        this.newBrew = new brew_component_1.Brew;
        this.filter = '';
        this.activeCount = 0;
        this.orderBy = "default";
    };
    Inventory.prototype.addCoffee = function (coffee) {
        var _this = this;
        this._inventoryService.add(coffee).then(function (coffee) { _this.coffees.push(coffee); _this.filter = ''; });
        this.showAdd = false;
        this.newCoffee = new coffee_component_1.Coffee;
    };
    Inventory.prototype.updateCoffee = function (coffee) {
        this._inventoryService.update(coffee);
        this.goToDisplay(coffee);
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
    Inventory.prototype.addBrew = function (brew) {
        brew.brewedAt = new Date().toLocaleString();
        this._brewService.add(brew);
        this.hideNewBrew();
        this.newBrew = new brew_component_1.Brew;
    };
    Inventory.prototype.showNewBrew = function (coffeeId) {
        this.newBrew.coffeeId = coffeeId;
        this.showBrew = true;
    };
    Inventory.prototype.hideNewBrew = function () {
        this.showBrew = false;
    };
    Inventory.prototype.checkActiveCount = function () {
        var currentActive = this.activeCount;
        this.activeCount++;
        return currentActive;
    };
    return Inventory;
}());
Inventory = __decorate([
    core_1.Component({
        selector: 'inventory',
        templateUrl: 'app/inventory/inventory.component.html',
        providers: [inventory_service_1.InventoryService, brews_service_1.BrewService]
    }),
    __metadata("design:paramtypes", [inventory_service_1.InventoryService, brews_service_1.BrewService])
], Inventory);
exports.Inventory = Inventory;
//# sourceMappingURL=inventory.component.js.map