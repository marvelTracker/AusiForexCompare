import { Component } from '@angular/core';
import{Routes, ROUTER_DIRECTIVES} from '@angular/router'
import{ForeignTransfersComponent} from './foreignTransfers.component'
import{TravelNotesComponent} from './travelnotes.component'
import{HeaderComponent} from './header.component'
import{SideBarComponent} from './layout/sidebar.component'

@Component({
    selector: 'af-app',
    template: ` <div class="page-content">
             <af-sidebar> </af-sidebar>
            <!-- START X-NAVIGATION VERTICAL -->
            <ul class="x-navigation x-navigation-horizontal x-navigation-panel"></ul>
            <!-- PAGE CONTENT WRAPPER -->
            <!-- END PAGE CONTENT WRAPPER -->
           <af-header></af-header>
            <router-outlet></router-outlet>
        </div>
           
    `,
    directives:[ROUTER_DIRECTIVES, HeaderComponent, SideBarComponent]

})
@Routes([
    {path:'/', component:ForeignTransfersComponent},
    {path:'/travelnotes', component:TravelNotesComponent},
])


export class AppComponent {
    
}