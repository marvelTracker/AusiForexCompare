import { Component } from '@angular/core';
import {SearchPanelComponent} from './searchpanel.component'
import {ResultPanelComponent} from './resultpanel.component'


@Component({
    selector: 'oz-ftransfer',
    template: ` <div class="row">
                        <oz-searchpanel></oz-searchpanel>
                </div>
                <div class="row">
                       <oz-resultpanel></oz-resultpanel>                        
                </div>                      

    `,
    directives:[SearchPanelComponent, ResultPanelComponent]
})

export class ForeignTransfersComponent {
    
}