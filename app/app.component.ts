import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <inventory></inventory>      
        `
})

export class AppComponent {
    title = 'CafeTorium'    
}