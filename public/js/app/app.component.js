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
var travelnotes_component_1 = require('./travelnotes.component');
var header_component_1 = require('./header.component');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: " \n        <div class=\"container\">\n            <fx-header></fx-header>\n            <router-outlet></router-outlet>\n        </div>    \n    ",
            directives: [router_1.ROUTER_DIRECTIVES, header_component_1.HeaderComponent]
        }),
        router_1.Routes([
            { path: '/', component: foreignTransfers_component_1.ForeignTransfersComponent },
            { path: '/travelnotes', component: travelnotes_component_1.TravelNotesComponent },
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyx1QkFBdUMsaUJBQ3ZDLENBQUMsQ0FEdUQ7QUFDeEQsMkNBQXVDLDhCQUN2QyxDQUFDLENBRG9FO0FBQ3JFLHNDQUFrQyx5QkFDbEMsQ0FBQyxDQUQwRDtBQUMzRCxpQ0FBNkIsb0JBRTdCLENBQUMsQ0FGZ0Q7QUFtQmpEO0lBQUE7SUFFQSxDQUFDO0lBbkJEO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFBRSxrSkFLVDtZQUNELFVBQVUsRUFBQyxDQUFDLDBCQUFpQixFQUFFLGtDQUFlLENBQUM7U0FFbEQsQ0FBQztRQUNELGVBQU0sQ0FBQztZQUNKLEVBQUMsSUFBSSxFQUFDLEdBQUcsRUFBRSxTQUFTLEVBQUMsc0RBQXlCLEVBQUM7WUFDL0MsRUFBQyxJQUFJLEVBQUMsY0FBYyxFQUFFLFNBQVMsRUFBQyw0Q0FBb0IsRUFBQztTQUN4RCxDQUFDOztvQkFBQTtJQUtGLG1CQUFDO0FBQUQsQ0FGQSxBQUVDLElBQUE7QUFGWSxvQkFBWSxlQUV4QixDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0e1JvdXRlcywgUk9VVEVSX0RJUkVDVElWRVN9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcidcclxuaW1wb3J0e0ZvcmVpZ25UcmFuc2ZlcnNDb21wb25lbnR9IGZyb20gJy4vZm9yZWlnblRyYW5zZmVycy5jb21wb25lbnQnXHJcbmltcG9ydHtUcmF2ZWxOb3Rlc0NvbXBvbmVudH0gZnJvbSAnLi90cmF2ZWxub3Rlcy5jb21wb25lbnQnXHJcbmltcG9ydHtIZWFkZXJDb21wb25lbnR9IGZyb20gJy4vaGVhZGVyLmNvbXBvbmVudCdcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxyXG4gICAgdGVtcGxhdGU6IGAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZngtaGVhZGVyPjwvZngtaGVhZGVyPlxyXG4gICAgICAgICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XHJcbiAgICAgICAgPC9kaXY+ICAgIFxyXG4gICAgYCxcclxuICAgIGRpcmVjdGl2ZXM6W1JPVVRFUl9ESVJFQ1RJVkVTLCBIZWFkZXJDb21wb25lbnRdXHJcblxyXG59KVxyXG5AUm91dGVzKFtcclxuICAgIHtwYXRoOicvJywgY29tcG9uZW50OkZvcmVpZ25UcmFuc2ZlcnNDb21wb25lbnR9LFxyXG4gICAge3BhdGg6Jy90cmF2ZWxub3RlcycsIGNvbXBvbmVudDpUcmF2ZWxOb3Rlc0NvbXBvbmVudH0sXHJcbl0pXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XHJcbiAgICBcclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
