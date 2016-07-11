import { Component,Output, Input, EventEmitter } from '@angular/core';
import{DropdownComponent} from './dropdown.component'
import{ISearchModel} from './model/SearchModel'

@Component({
  selector: 'oz-searchpanel',
  template: `  <div class="panel-searchbar panel-success">
                            <div class="panel-body">
                                <div class="col-sm-3">
                                    <p style="font-size: 30px">I want to convert</p>
                                </div>
                                <div class="col-sm-2">
                                    <input type="text" class="form-control input-lg" value="1000" />
                                </div>
                                <div class="col-sm-2">
                                        <oz-dropdown (select)="searchModel.sourceCurrency = $event" [values]="currenciesList"></oz-dropdown>
                                </div>
                                <div class="col-sm-1" style="font-size: 30px">To</div>
                                <div class="col-sm-2">
                                        <oz-dropdown (select)="searchModel.convertToCurrency = $event" [values]="currenciesList"></oz-dropdown>
                                </div>
                                <div class="col-sm-2">
                                    <button type="button" class="btn btn-success btn-lg" (click)='onClick()'>Compare</button>
                                </div>
                            </div>
                        </div>
`,
  directives:[DropdownComponent]
})
export class SearchPanelComponent {
    sourceCurrency:string;
    convertToCurrency:string;
    searchModel:ISearchModel;
    currenciesList:any[] = ["AUD", "EUR", "YEN", "LKR", "USD", "NZD"];
    @Output() getSearchModel:EventEmitter<ISearchModel> = new EventEmitter<ISearchModel>();

    onClick(){
        this.getSearchModel.emit(this.searchModel);
    }

}
