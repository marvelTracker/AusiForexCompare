import { Component } from '@angular/core';
import{Routes, ROUTER_DIRECTIVES} from '@angular/router'
import{ForeignTransfersComponent} from './foreignTransfers.component'
import{TravelNotesComponent} from './travelnotes.component'
import{HeaderComponent} from './header.component'

@Component({
    selector: 'my-app',
    template: ` 
        <div class="container">
            <fx-header></fx-header>
            <router-outlet></router-outlet>
        </div>    
    `,
    directives:[ROUTER_DIRECTIVES, HeaderComponent]

})
@Routes([
    {path:'/', component:ForeignTransfersComponent},
    {path:'/travelnotes', component:TravelNotesComponent},
])


export class AppComponent {
    
}