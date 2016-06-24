import { Component } from '@angular/core';
import{Router, ROUTER_DIRECTIVES} from '@angular/router'

@Component({
    selector: 'af-header',
    template: ` 
        <header class="row">
            <nav class="col-md-8 col-md-offset-2">
                <ul class="nav nav-pills">
                    <li><a [routerLink]="['']">ForeignTransfers</a><li>
                    <li><a [routerLink]="['travelnotes']">Travel Money</a><li>
                </ul>
            </nav>
        </header>
                    `,
    directives:[ROUTER_DIRECTIVES]    
})

export class HeaderComponent {
    
}
