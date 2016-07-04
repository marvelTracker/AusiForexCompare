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
    }
    SearchPanelComponent = __decorate([
        core_1.Component({
            selector: 'oz-searchpanel',
            template: "  <div class=\"panel-searchbar panel-success\">\n                            <div class=\"panel-body\">\n                                <div class=\"col-sm-3\">\n                                    <p style=\"font-size: 30px\">I want to convert</p>\n                                </div>\n                                <div class=\"col-sm-2\">\n                                    <input type=\"text\" class=\"form-control input-lg\" value=\"1000\" />\n                                </div>\n                                <div class=\"col-sm-2\">\n                                        <oz-dropdown></oz-dropdown>\n                                </div>\n                                <div class=\"col-sm-1\" style=\"font-size: 30px\">To</div>\n                                <div class=\"col-sm-2\">\n                                 <oz-dropdown></oz-dropdown>\n                                </div>\n                                <div class=\"col-sm-2\">\n                                    <button type=\"button\" class=\"btn btn-success btn-lg\">Compare</button>\n                                </div>\n                            </div>\n                        </div>\n",
            directives: [dropdown_component_1.DropdownComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], SearchPanelComponent);
    return SearchPanelComponent;
}());
exports.SearchPanelComponent = SearchPanelComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaHBhbmVsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTBCLGVBQWUsQ0FBQyxDQUFBO0FBQzFDLG1DQUErQixzQkFFL0IsQ0FBQyxDQUZvRDtBQTJCckQ7SUFBQTtJQUVBLENBQUM7SUEzQkQ7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixRQUFRLEVBQUUsMnFDQW9CWDtZQUNDLFVBQVUsRUFBQyxDQUFDLHNDQUFpQixDQUFDO1NBQy9CLENBQUM7OzRCQUFBO0lBR0YsMkJBQUM7QUFBRCxDQUZBLEFBRUMsSUFBQTtBQUZZLDRCQUFvQix1QkFFaEMsQ0FBQSIsImZpbGUiOiJzZWFyY2hwYW5lbC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0e0Ryb3Bkb3duQ29tcG9uZW50fSBmcm9tICcuL2Ryb3Bkb3duLmNvbXBvbmVudCdcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnb3otc2VhcmNocGFuZWwnLFxyXG4gIHRlbXBsYXRlOiBgICA8ZGl2IGNsYXNzPVwicGFuZWwtc2VhcmNoYmFyIHBhbmVsLXN1Y2Nlc3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPVwiZm9udC1zaXplOiAzMHB4XCI+SSB3YW50IHRvIGNvbnZlcnQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sIGlucHV0LWxnXCIgdmFsdWU9XCIxMDAwXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvei1kcm9wZG93bj48L296LWRyb3Bkb3duPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMVwiIHN0eWxlPVwiZm9udC1zaXplOiAzMHB4XCI+VG88L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG96LWRyb3Bkb3duPjwvb3otZHJvcGRvd24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzIGJ0bi1sZ1wiPkNvbXBhcmU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuYCxcclxuICBkaXJlY3RpdmVzOltEcm9wZG93bkNvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNlYXJjaFBhbmVsQ29tcG9uZW50IHtcclxuIFxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
