import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <inventory></inventory>      
        `,
     styleUrls: ['app/content/bootstrap/css/bootstrap.min.css']   
})

export class AppComponent {
    title = 'CafeTorium'    
}