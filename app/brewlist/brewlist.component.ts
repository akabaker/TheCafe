import {Component} from '@angular/core';
import {Coffee} from '../coffee/coffee.component';
import {Brew} from '../coffee/brew.component';
import {InventoryService} from '../services/inventory.service';
import {BrewService} from '../services/brews.service';
import * as moment from 'moment';

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

    sortBrewsByAge(brews : Brew[]) : Brew[] {
        var sortedBrews = brews.sort((a, b) => this.compareBrewsByAge(a.brewedAt, b.brewedAt));
        return sortedBrews;
    }

    compareBrewsByAge(dateOneString : string, dateTwoString : string) {
        var dateA = new Date(dateOneString);
        var dateB = new Date(dateTwoString);
        return dateA > dateB ? -1 : 1;
    }

    getAge(brew : Brew) : string {
       var brewedDate = new Date(brew.brewedAt);
       var now = new Date();
       var difference = now.valueOf() - brewedDate.valueOf();
       var timeDiff = moment.duration(difference);
    
       
       return `${timeDiff.days()}:${timeDiff.hours()}:${timeDiff.minutes()}`;
    }
}