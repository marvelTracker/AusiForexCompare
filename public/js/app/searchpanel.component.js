"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var dropdown_component_1 = require('./dropdown.component');
var SearchPanelComponent = (function () {
    function SearchPanelComponent() {
        this.currenciesList = ["AUD", "EUR", "YEN", "LKR", "USD", "NZD"];
        this.getSearchModel = new core_1.EventEmitter();
    }
    SearchPanelComponent.prototype.onClick = function () {
        this.getSearchModel.emit(this.searchModel);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], SearchPanelComponent.prototype, "getSearchModel", void 0);
    SearchPanelComponent = __decorate([
        core_1.Component({
            selector: 'oz-searchpanel',
            template: "  <div class=\"panel-searchbar panel-success\">\n                            <div class=\"panel-body\">\n                                <div class=\"col-sm-3\">\n                                    <p style=\"font-size: 30px\">I want to convert</p>\n                                </div>\n                                <div class=\"col-sm-2\">\n                                    <input type=\"text\" class=\"form-control input-lg\" value=\"1000\" />\n                                </div>\n                                <div class=\"col-sm-2\">\n                                        <oz-dropdown (select)=\"searchModel.sourceCurrency = $event\" [values]=\"currenciesList\"></oz-dropdown>\n                                </div>\n                                <div class=\"col-sm-1\" style=\"font-size: 30px\">To</div>\n                                <div class=\"col-sm-2\">\n                                        <oz-dropdown (select)=\"searchModel.convertToCurrency = $event\" [values]=\"currenciesList\"></oz-dropdown>\n                                </div>\n                                <div class=\"col-sm-2\">\n                                    <button type=\"button\" class=\"btn btn-success btn-lg\" (click)='onClick()'>Compare</button>\n                                </div>\n                            </div>\n                        </div>\n",
            directives: [dropdown_component_1.DropdownComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], SearchPanelComponent);
    return SearchPanelComponent;
}());
exports.SearchPanelComponent = SearchPanelComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaHBhbmVsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXNELGVBQWUsQ0FBQyxDQUFBO0FBQ3RFLG1DQUErQixzQkFDL0IsQ0FBQyxDQURvRDtBQTRCckQ7SUFBQTtRQUlJLG1CQUFjLEdBQVMsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3hELG1CQUFjLEdBQThCLElBQUksbUJBQVksRUFBZ0IsQ0FBQztJQU0zRixDQUFDO0lBSkcsc0NBQU8sR0FBUDtRQUNJLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBSkQ7UUFBQyxhQUFNLEVBQUU7O2dFQUFBO0lBOUJiO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsUUFBUSxFQUFFLG0yQ0FvQlg7WUFDQyxVQUFVLEVBQUMsQ0FBQyxzQ0FBaUIsQ0FBQztTQUMvQixDQUFDOzs0QkFBQTtJQVlGLDJCQUFDO0FBQUQsQ0FYQSxBQVdDLElBQUE7QUFYWSw0QkFBb0IsdUJBV2hDLENBQUEiLCJmaWxlIjoic2VhcmNocGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LE91dHB1dCwgSW5wdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnR7RHJvcGRvd25Db21wb25lbnR9IGZyb20gJy4vZHJvcGRvd24uY29tcG9uZW50J1xyXG5pbXBvcnR7SVNlYXJjaE1vZGVsfSBmcm9tICcuL21vZGVsL1NlYXJjaE1vZGVsJ1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdvei1zZWFyY2hwYW5lbCcsXHJcbiAgdGVtcGxhdGU6IGAgIDxkaXYgY2xhc3M9XCJwYW5lbC1zZWFyY2hiYXIgcGFuZWwtc3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9XCJmb250LXNpemU6IDMwcHhcIj5JIHdhbnQgdG8gY29udmVydDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2wgaW5wdXQtbGdcIiB2YWx1ZT1cIjEwMDBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG96LWRyb3Bkb3duIChzZWxlY3QpPVwic2VhcmNoTW9kZWwuc291cmNlQ3VycmVuY3kgPSAkZXZlbnRcIiBbdmFsdWVzXT1cImN1cnJlbmNpZXNMaXN0XCI+PC9vei1kcm9wZG93bj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTFcIiBzdHlsZT1cImZvbnQtc2l6ZTogMzBweFwiPlRvPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3otZHJvcGRvd24gKHNlbGVjdCk9XCJzZWFyY2hNb2RlbC5jb252ZXJ0VG9DdXJyZW5jeSA9ICRldmVudFwiIFt2YWx1ZXNdPVwiY3VycmVuY2llc0xpc3RcIj48L296LWRyb3Bkb3duPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc3VjY2VzcyBidG4tbGdcIiAoY2xpY2spPSdvbkNsaWNrKCknPkNvbXBhcmU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuYCxcclxuICBkaXJlY3RpdmVzOltEcm9wZG93bkNvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNlYXJjaFBhbmVsQ29tcG9uZW50IHtcclxuICAgIHNvdXJjZUN1cnJlbmN5OnN0cmluZztcclxuICAgIGNvbnZlcnRUb0N1cnJlbmN5OnN0cmluZztcclxuICAgIHNlYXJjaE1vZGVsOklTZWFyY2hNb2RlbDtcclxuICAgIGN1cnJlbmNpZXNMaXN0OmFueVtdID0gW1wiQVVEXCIsIFwiRVVSXCIsIFwiWUVOXCIsIFwiTEtSXCIsIFwiVVNEXCIsIFwiTlpEXCJdO1xyXG4gICAgQE91dHB1dCgpIGdldFNlYXJjaE1vZGVsOkV2ZW50RW1pdHRlcjxJU2VhcmNoTW9kZWw+ID0gbmV3IEV2ZW50RW1pdHRlcjxJU2VhcmNoTW9kZWw+KCk7XHJcblxyXG4gICAgb25DbGljaygpe1xyXG4gICAgICAgIHRoaXMuZ2V0U2VhcmNoTW9kZWwuZW1pdCh0aGlzLnNlYXJjaE1vZGVsKTtcclxuICAgIH1cclxuXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
