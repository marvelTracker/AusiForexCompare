import { Component } from '@angular/core';
import{Router,Routes, ROUTER_DIRECTIVES} from '@angular/router'
import{ForeignTransfersComponent} from './foreignTransfers.component'
import{TravelNotesComponent} from './travelNotes.component'
import{TravelChequesComponent} from './travelCheques.component'
import{HeaderComponent} from './header.component'
import{SideBarComponent} from './sidebar.component'

@Component({
    selector: 'my-app',
    template: ` 
         <div class="container-fluid">
            <div class="row">
                <div class="col-sm-3 col-lg-2">
                    <oz-sidebar></oz-sidebar>
                </div>
                <div class="col-sm-9 col-lg-10">
                    <div class="row">
                        <nav class="navbar navbar-inverse navbar-static-top header-bar">
                                <div class="container-fluid">
                                </div>
                        </nav>
                    </div>
                    <div class="content">
                       <router-outlet></router-outlet>                      
                    </div>
                </div>
            </div>
        </div>          
          
        
    `,
    directives:[ROUTER_DIRECTIVES, HeaderComponent, SideBarComponent,ForeignTransfersComponent ]   

})
@Routes([
    {path:'/', component:ForeignTransfersComponent},
    {path:'/travelnotes', component:TravelNotesComponent},
    {path:'/travelcheques', component:TravelChequesComponent}
])


export class AppComponent {
    
}