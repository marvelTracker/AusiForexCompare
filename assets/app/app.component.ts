import { Component } from '@angular/core';
import{Router,Routes, ROUTER_DIRECTIVES} from '@angular/router'
import{ForeignTransfersComponent} from './foreignTransfers.component'
import{TravelNotesComponent} from './travelNotes.component'
import{TravelChequesComponent} from './travelCheques.component'
import{HeaderComponent} from './header.component'

@Component({
    selector: 'my-app',
    template: ` 
        <div class="container"> 
        <div style='display:none'>
       <af-header></af-header>
        </div>                   
            <router-outlet></router-outlet>                        
        </div>  
        
    `,
    directives:[ROUTER_DIRECTIVES, HeaderComponent]   

})
@Routes([
    {path:'/', component:ForeignTransfersComponent},
    {path:'/travelnotes', component:TravelNotesComponent},
    {path:'/travelcheques', component:TravelChequesComponent}
])


export class AppComponent {
    
}