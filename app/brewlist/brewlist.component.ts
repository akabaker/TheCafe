import {Component} from '@angular/core';
import {Coffee} from '../coffee/coffee.component';
import {Brew} from '../coffee/brew.component';
import {InventoryService} from '../services/inventory.service';
import {BrewService} from '../services/brews.service';

@Component({
    selector: 'brewlist',
    templateUrl: 'app/brewlist/brewlist.component.html',
    providers: [InventoryService, BrewService]
})

export class BrewList {
    title = "What's Brewin?"
    brews : Brew[];

    constructor(private _brewService : BrewService) {  }

    ngOnInit() {
        this._brewService.getBrews().subscribe(brews => this.brews = this.sortBrewsByAge(brews));
    }

    sortBrewsByAge(brews : Brew[]) {
        var sortedBrews = brews.sort((a, b) => this.compareBrewsByAge(a.brewedAt, b.brewedAt));
        return sortedBrews;
    }

    compareBrewsByAge(dateOneString : string, dateTwoString : string) {
        var dateA = new Date(dateOneString);
        var dateB = new Date(dateTwoString);
        return dateA > dateB ? -1 : 1;
    }
}