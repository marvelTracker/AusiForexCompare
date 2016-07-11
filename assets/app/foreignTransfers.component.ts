import { Component } from '@angular/core';
import {SearchPanelComponent} from './searchpanel.component'
import {ResultPanelComponent} from './resultpanel.component'
import {ISearchModel} from './model/SearchModel'


@Component({
    selector: 'oz-ftransfer',
    template: ` <div class="row">
                        <oz-searchpanel (getSearchModel)='onGetSearchModel()'></oz-searchpanel>
                </div>
                <div class="row">
                       <!--<oz-resultpanel></oz-resultpanel>      !-->  
                       <div>source: {{source}}   </div>
                       <div>destination:{{destination}} </div>        
                </div>                      

    `,
    directives:[SearchPanelComponent, ResultPanelComponent]
})

export class ForeignTransfersComponent {
    source:string;
    destination:string;
    
    onGetSearchModel(searchModel:ISearchModel):void{
        this.source = searchModel.sourceCurrency;
        this.destination = searchModel.convertToCurrency;
    }
}