"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var inventory_service_1 = require("../services/inventory.service");
var brews_service_1 = require("../services/brews.service");
var BrewList = (function () {
    function BrewList() {
    }
    return BrewList;
}());
BrewList = __decorate([
    core_1.Component({
        selector: 'brewlist',
        templateUrl: 'app/brewlist/brewlist.component.html',
        providers: [inventory_service_1.InventoryService, brews_service_1.BrewService]
    })
], BrewList);
exports.BrewList = BrewList;
//# sourceMappingURL=brewlist.component.js.map