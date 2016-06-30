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
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: " \n        <div class=\"container\"> \n        <div style='display:none'>\n       <af-header></af-header>\n        </div>                   \n            <router-outlet></router-outlet>                        \n        </div>  \n        \n    ",
            directives: [router_1.ROUTER_DIRECTIVES, header_component_1.HeaderComponent]
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyx1QkFBOEMsaUJBQzlDLENBQUMsQ0FEOEQ7QUFDL0QsMkNBQXVDLDhCQUN2QyxDQUFDLENBRG9FO0FBQ3JFLHNDQUFrQyx5QkFDbEMsQ0FBQyxDQUQwRDtBQUMzRCx3Q0FBb0MsMkJBQ3BDLENBQUMsQ0FEOEQ7QUFDL0QsaUNBQTZCLG9CQUU3QixDQUFDLENBRmdEO0FBdUJqRDtJQUFBO0lBRUEsQ0FBQztJQXZCRDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixRQUFRLEVBQUUscVBBUVQ7WUFDRCxVQUFVLEVBQUMsQ0FBQywwQkFBaUIsRUFBRSxrQ0FBZSxDQUFDO1NBRWxELENBQUM7UUFDRCxlQUFNLENBQUM7WUFDSixFQUFDLElBQUksRUFBQyxHQUFHLEVBQUUsU0FBUyxFQUFDLHNEQUF5QixFQUFDO1lBQy9DLEVBQUMsSUFBSSxFQUFDLGNBQWMsRUFBRSxTQUFTLEVBQUMsNENBQW9CLEVBQUM7WUFDckQsRUFBQyxJQUFJLEVBQUMsZ0JBQWdCLEVBQUUsU0FBUyxFQUFDLGdEQUFzQixFQUFDO1NBQzVELENBQUM7O29CQUFBO0lBS0YsbUJBQUM7QUFBRCxDQUZBLEFBRUMsSUFBQTtBQUZZLG9CQUFZLGVBRXhCLENBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnR7Um91dGVyLFJvdXRlcywgUk9VVEVSX0RJUkVDVElWRVN9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcidcclxuaW1wb3J0e0ZvcmVpZ25UcmFuc2ZlcnNDb21wb25lbnR9IGZyb20gJy4vZm9yZWlnblRyYW5zZmVycy5jb21wb25lbnQnXHJcbmltcG9ydHtUcmF2ZWxOb3Rlc0NvbXBvbmVudH0gZnJvbSAnLi90cmF2ZWxOb3Rlcy5jb21wb25lbnQnXHJcbmltcG9ydHtUcmF2ZWxDaGVxdWVzQ29tcG9uZW50fSBmcm9tICcuL3RyYXZlbENoZXF1ZXMuY29tcG9uZW50J1xyXG5pbXBvcnR7SGVhZGVyQ29tcG9uZW50fSBmcm9tICcuL2hlYWRlci5jb21wb25lbnQnXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcclxuICAgIHRlbXBsYXRlOiBgIFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj4gXHJcbiAgICAgICAgPGRpdiBzdHlsZT0nZGlzcGxheTpub25lJz5cclxuICAgICAgIDxhZi1oZWFkZXI+PC9hZi1oZWFkZXI+XHJcbiAgICAgICAgPC9kaXY+ICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICBcclxuICAgIGAsXHJcbiAgICBkaXJlY3RpdmVzOltST1VURVJfRElSRUNUSVZFUywgSGVhZGVyQ29tcG9uZW50XSAgIFxyXG5cclxufSlcclxuQFJvdXRlcyhbXHJcbiAgICB7cGF0aDonLycsIGNvbXBvbmVudDpGb3JlaWduVHJhbnNmZXJzQ29tcG9uZW50fSxcclxuICAgIHtwYXRoOicvdHJhdmVsbm90ZXMnLCBjb21wb25lbnQ6VHJhdmVsTm90ZXNDb21wb25lbnR9LFxyXG4gICAge3BhdGg6Jy90cmF2ZWxjaGVxdWVzJywgY29tcG9uZW50OlRyYXZlbENoZXF1ZXNDb21wb25lbnR9XHJcbl0pXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XHJcbiAgICBcclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
