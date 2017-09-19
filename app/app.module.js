"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var inventory_component_1 = require("./inventory/inventory.component");
var brewlist_component_1 = require("./brewlist/brewlist.component");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var coffee_filter_1 = require("./pipes/coffee.filter");
var coffee_order_1 = require("./pipes/coffee.order");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var appRoutes = [
    { path: 'inventory', component: inventory_component_1.Inventory },
    { path: 'brewlist', component: brewlist_component_1.BrewList },
    { path: '', redirectTo: '/inventory', pathMatch: 'full' }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(appRoutes, { enableTracing: true }),
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            http_1.JsonpModule
        ],
        declarations: [app_component_1.AppComponent, inventory_component_1.Inventory, coffee_filter_1.CoffeeFilter, coffee_order_1.CoffeeOrder, brewlist_component_1.BrewList],
        bootstrap: [app_component_1.AppComponent],
        providers: [{ provide: common_1.APP_BASE_HREF, useValue: '/' }]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map