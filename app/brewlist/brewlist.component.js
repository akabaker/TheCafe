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
var inventory_service_1 = require("../services/inventory.service");
var brews_service_1 = require("../services/brews.service");
var moment = require("moment");
var BrewList = (function () {
    function BrewList(_brewService) {
        this._brewService = _brewService;
        this.title = "What's Brewin?";
    }
    BrewList.prototype.ngOnInit = function () {
        var _this = this;
        this._brewService.getBrews().subscribe(function (brews) { return _this.brews = _this.sortBrewsByAge(brews); });
    };
    BrewList.prototype.sortBrewsByAge = function (brews) {
        var _this = this;
        var sortedBrews = brews.sort(function (a, b) { return _this.compareBrewsByAge(a.brewedAt, b.brewedAt); });
        return sortedBrews;
    };
    BrewList.prototype.compareBrewsByAge = function (dateOneString, dateTwoString) {
        var dateA = new Date(dateOneString);
        var dateB = new Date(dateTwoString);
        return dateA > dateB ? -1 : 1;
    };
    BrewList.prototype.getAge = function (brew) {
        var brewedDate = new Date(brew.brewedAt);
        var now = new Date();
        var difference = now.valueOf() - brewedDate.valueOf();
        var timeDiff = moment.duration(difference);
        return timeDiff.days() + ":" + timeDiff.hours() + ":" + timeDiff.minutes();
    };
    return BrewList;
}());
BrewList = __decorate([
    core_1.Component({
        selector: 'brewlist',
        templateUrl: 'app/brewlist/brewlist.component.html',
        providers: [inventory_service_1.InventoryService, brews_service_1.BrewService]
    }),
    __metadata("design:paramtypes", [brews_service_1.BrewService])
], BrewList);
exports.BrewList = BrewList;
//# sourceMappingURL=brewlist.component.js.map