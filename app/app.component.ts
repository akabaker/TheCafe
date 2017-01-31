import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <inventory></inventory>
        <coffee-input></coffee-input>            
        `
})

export class AppComponent {
    title = 'CafeTorium'    
}