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
var router_1 = require('@angular/router');
var foreignTransfers_component_1 = require('./foreignTransfers.component');
var travelNotes_component_1 = require('./travelNotes.component');
var travelCheques_component_1 = require('./travelCheques.component');
var header_component_1 = require('./header.component');
var sidebar_component_1 = require('./sidebar.component');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: " \n         <div class=\"container-fluid\">\n            <div class=\"row\">\n                <div class=\"col-sm-3 col-lg-2\">\n                    <oz-sidebar></oz-sidebar>\n                </div>\n                <div class=\"col-sm-9 col-lg-10\">\n                    <div class=\"row\">\n                        <nav class=\"navbar navbar-inverse navbar-static-top header-bar\">\n                                <div class=\"container-fluid\">\n                                </div>\n                        </nav>\n                    </div>\n                    <div class=\"content\">\n                       <router-outlet></router-outlet>                      \n                    </div>\n                </div>\n            </div>\n        </div>             \n                                    \n          \n        \n    ",
            directives: [router_1.ROUTER_DIRECTIVES, header_component_1.HeaderComponent, sidebar_component_1.SideBarComponent, foreignTransfers_component_1.ForeignTransfersComponent]
        }),
        router_1.Routes([
            { path: '/', component: foreignTransfers_component_1.ForeignTransfersComponent },
            { path: '/travelnotes', component: travelNotes_component_1.TravelNotesComponent },
            { path: '/travelcheques', component: travelCheques_component_1.TravelChequesComponent }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyx1QkFBOEMsaUJBQzlDLENBQUMsQ0FEOEQ7QUFDL0QsMkNBQXVDLDhCQUN2QyxDQUFDLENBRG9FO0FBQ3JFLHNDQUFrQyx5QkFDbEMsQ0FBQyxDQUQwRDtBQUMzRCx3Q0FBb0MsMkJBQ3BDLENBQUMsQ0FEOEQ7QUFDL0QsaUNBQTZCLG9CQUM3QixDQUFDLENBRGdEO0FBQ2pELGtDQUE4QixxQkFFOUIsQ0FBQyxDQUZrRDtBQXFDbkQ7SUFBQTtJQUVBLENBQUM7SUFyQ0Q7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLHcwQkFzQlQ7WUFDRCxVQUFVLEVBQUMsQ0FBQywwQkFBaUIsRUFBRSxrQ0FBZSxFQUFFLG9DQUFnQixFQUFDLHNEQUF5QixDQUFFO1NBRS9GLENBQUM7UUFDRCxlQUFNLENBQUM7WUFDSixFQUFDLElBQUksRUFBQyxHQUFHLEVBQUUsU0FBUyxFQUFDLHNEQUF5QixFQUFDO1lBQy9DLEVBQUMsSUFBSSxFQUFDLGNBQWMsRUFBRSxTQUFTLEVBQUMsNENBQW9CLEVBQUM7WUFDckQsRUFBQyxJQUFJLEVBQUMsZ0JBQWdCLEVBQUUsU0FBUyxFQUFDLGdEQUFzQixFQUFDO1NBQzVELENBQUM7O29CQUFBO0lBS0YsbUJBQUM7QUFBRCxDQUZBLEFBRUMsSUFBQTtBQUZZLG9CQUFZLGVBRXhCLENBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnR7Um91dGVyLFJvdXRlcywgUk9VVEVSX0RJUkVDVElWRVN9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcidcclxuaW1wb3J0e0ZvcmVpZ25UcmFuc2ZlcnNDb21wb25lbnR9IGZyb20gJy4vZm9yZWlnblRyYW5zZmVycy5jb21wb25lbnQnXHJcbmltcG9ydHtUcmF2ZWxOb3Rlc0NvbXBvbmVudH0gZnJvbSAnLi90cmF2ZWxOb3Rlcy5jb21wb25lbnQnXHJcbmltcG9ydHtUcmF2ZWxDaGVxdWVzQ29tcG9uZW50fSBmcm9tICcuL3RyYXZlbENoZXF1ZXMuY29tcG9uZW50J1xyXG5pbXBvcnR7SGVhZGVyQ29tcG9uZW50fSBmcm9tICcuL2hlYWRlci5jb21wb25lbnQnXHJcbmltcG9ydHtTaWRlQmFyQ29tcG9uZW50fSBmcm9tICcuL3NpZGViYXIuY29tcG9uZW50J1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXHJcbiAgICB0ZW1wbGF0ZTogYCBcclxuICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTMgY29sLWxnLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8b3otc2lkZWJhcj48L296LXNpZGViYXI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tOSBjb2wtbGctMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuYXYgY2xhc3M9XCJuYXZiYXIgbmF2YmFyLWludmVyc2UgbmF2YmFyLXN0YXRpYy10b3AgaGVhZGVyLWJhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+ICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICBcclxuICAgICAgICBcclxuICAgIGAsXHJcbiAgICBkaXJlY3RpdmVzOltST1VURVJfRElSRUNUSVZFUywgSGVhZGVyQ29tcG9uZW50LCBTaWRlQmFyQ29tcG9uZW50LEZvcmVpZ25UcmFuc2ZlcnNDb21wb25lbnQgXSAgIFxyXG5cclxufSlcclxuQFJvdXRlcyhbXHJcbiAgICB7cGF0aDonLycsIGNvbXBvbmVudDpGb3JlaWduVHJhbnNmZXJzQ29tcG9uZW50fSxcclxuICAgIHtwYXRoOicvdHJhdmVsbm90ZXMnLCBjb21wb25lbnQ6VHJhdmVsTm90ZXNDb21wb25lbnR9LFxyXG4gICAge3BhdGg6Jy90cmF2ZWxjaGVxdWVzJywgY29tcG9uZW50OlRyYXZlbENoZXF1ZXNDb21wb25lbnR9XHJcbl0pXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XHJcbiAgICBcclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
