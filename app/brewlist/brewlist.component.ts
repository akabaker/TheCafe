import {Component} from '@angular/core';
import {Coffee} from '../coffee/coffee.component';
import {Brew} from '../coffee/brew.component';
import {InventoryService} from '../services/inventory.service';
import {BrewService} from '../services/brews.service';

@Component({
    selector: 'inventory',
    templateUrl: 'app/brewlist/brewlist.component.html',
    providers: [InventoryService, BrewService]
})

export class BrewList {
}