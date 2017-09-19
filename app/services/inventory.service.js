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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
require("rxjs/add/operator/toPromise");
var InventoryService = (function () {
    function InventoryService(http) {
        this.http = http;
        this.coffeesUrl = 'http://localhost/CoffeeData/CoffeeRest.svc/coffees';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    InventoryService.prototype.getCoffees = function () {
        return this.http.get(this.coffeesUrl).map(this.extractData).catch(this.handleError);
    };
    InventoryService.prototype.update = function (coffee) {
        var coffeeOne = { "coffee": coffee };
        console.log(coffeeOne);
        return this.http
            .put(this.coffeesUrl, coffeeOne, { headers: this.headers })
            .toPromise()
            .then(function () { return coffee; })
            .catch(this.handleError);
    };
    InventoryService.prototype.add = function (coffee) {
        var coffeeOne = { "coffee": coffee };
        return this.http
            .post(this.coffeesUrl, coffeeOne, { headers: this.headers })
            .map(function (res) { console.log(res.json()); coffee = res.json().AddCoffeeResult; })
            .toPromise()
            .then(function () { return coffee; })
            .catch(this.handleError);
    };
    InventoryService.prototype.delete = function (coffee) {
        var coffeeOne = { "coffee": coffee };
        return this.http
            .delete(this.coffeesUrl + "/" + coffee.id)
            .toPromise()
            .then(function () { return coffee; })
            .catch(this.handleError);
    };
    InventoryService.prototype.extractData = function (res) {
        var body = res.json();
        console.log('body', body);
        return body.GetCoffeesResult || {};
    };
    InventoryService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    return InventoryService;
}());
InventoryService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], InventoryService);
exports.InventoryService = InventoryService;
//# sourceMappingURL=inventory.service.js.map