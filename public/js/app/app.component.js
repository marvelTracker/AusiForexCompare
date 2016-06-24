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
var sidebar_component_1 = require('./layout/sidebar.component');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'af-app',
            template: "  <div class=\"page-container\">\n            <af-sidebar> </af-sidebar>\n            <div class=\"page-content\">                        \n                <!-- START X-NAVIGATION VERTICAL -->\n                <ul class=\"x-navigation x-navigation-horizontal x-navigation-panel\"></ul>\n                <!-- PAGE CONTENT WRAPPER -->\n                <!-- END PAGE CONTENT WRAPPER -->\n                <af-header></af-header>\n                <router-outlet></router-outlet>\n            </div>\n            </div>\n           \n    ",
            directives: [router_1.ROUTER_DIRECTIVES, header_component_1.HeaderComponent, sidebar_component_1.SideBarComponent]
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyx1QkFBdUMsaUJBQ3ZDLENBQUMsQ0FEdUQ7QUFDeEQsMkNBQXVDLDhCQUN2QyxDQUFDLENBRG9FO0FBQ3JFLHNDQUFrQyx5QkFDbEMsQ0FBQyxDQUQwRDtBQUMzRCxpQ0FBNkIsb0JBQzdCLENBQUMsQ0FEZ0Q7QUFDakQsa0NBQThCLDRCQUU5QixDQUFDLENBRnlEO0FBMEIxRDtJQUFBO0lBRUEsQ0FBQztJQTFCRDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixRQUFRLEVBQUUsc2hCQVlUO1lBQ0QsVUFBVSxFQUFDLENBQUMsMEJBQWlCLEVBQUUsa0NBQWUsRUFBRSxvQ0FBZ0IsQ0FBQztTQUVwRSxDQUFDO1FBQ0QsZUFBTSxDQUFDO1lBQ0osRUFBQyxJQUFJLEVBQUMsR0FBRyxFQUFFLFNBQVMsRUFBQyxzREFBeUIsRUFBQztZQUMvQyxFQUFDLElBQUksRUFBQyxjQUFjLEVBQUUsU0FBUyxFQUFDLDRDQUFvQixFQUFDO1NBQ3hELENBQUM7O29CQUFBO0lBS0YsbUJBQUM7QUFBRCxDQUZBLEFBRUMsSUFBQTtBQUZZLG9CQUFZLGVBRXhCLENBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnR7Um91dGVzLCBST1VURVJfRElSRUNUSVZFU30gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJ1xyXG5pbXBvcnR7Rm9yZWlnblRyYW5zZmVyc0NvbXBvbmVudH0gZnJvbSAnLi9mb3JlaWduVHJhbnNmZXJzLmNvbXBvbmVudCdcclxuaW1wb3J0e1RyYXZlbE5vdGVzQ29tcG9uZW50fSBmcm9tICcuL3RyYXZlbG5vdGVzLmNvbXBvbmVudCdcclxuaW1wb3J0e0hlYWRlckNvbXBvbmVudH0gZnJvbSAnLi9oZWFkZXIuY29tcG9uZW50J1xyXG5pbXBvcnR7U2lkZUJhckNvbXBvbmVudH0gZnJvbSAnLi9sYXlvdXQvc2lkZWJhci5jb21wb25lbnQnXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYWYtYXBwJyxcclxuICAgIHRlbXBsYXRlOiBgICA8ZGl2IGNsYXNzPVwicGFnZS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGFmLXNpZGViYXI+IDwvYWYtc2lkZWJhcj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhZ2UtY29udGVudFwiPiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPCEtLSBTVEFSVCBYLU5BVklHQVRJT04gVkVSVElDQUwgLS0+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJ4LW5hdmlnYXRpb24geC1uYXZpZ2F0aW9uLWhvcml6b250YWwgeC1uYXZpZ2F0aW9uLXBhbmVsXCI+PC91bD5cclxuICAgICAgICAgICAgICAgIDwhLS0gUEFHRSBDT05URU5UIFdSQVBQRVIgLS0+XHJcbiAgICAgICAgICAgICAgICA8IS0tIEVORCBQQUdFIENPTlRFTlQgV1JBUFBFUiAtLT5cclxuICAgICAgICAgICAgICAgIDxhZi1oZWFkZXI+PC9hZi1oZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICBcclxuICAgIGAsXHJcbiAgICBkaXJlY3RpdmVzOltST1VURVJfRElSRUNUSVZFUywgSGVhZGVyQ29tcG9uZW50LCBTaWRlQmFyQ29tcG9uZW50XVxyXG5cclxufSlcclxuQFJvdXRlcyhbXHJcbiAgICB7cGF0aDonLycsIGNvbXBvbmVudDpGb3JlaWduVHJhbnNmZXJzQ29tcG9uZW50fSxcclxuICAgIHtwYXRoOicvdHJhdmVsbm90ZXMnLCBjb21wb25lbnQ6VHJhdmVsTm90ZXNDb21wb25lbnR9LFxyXG5dKVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xyXG4gICAgXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
