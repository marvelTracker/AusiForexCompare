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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyx1QkFBdUMsaUJBQ3ZDLENBQUMsQ0FEdUQ7QUFDeEQsMkNBQXVDLDhCQUN2QyxDQUFDLENBRG9FO0FBQ3JFLHNDQUFrQyx5QkFDbEMsQ0FBQyxDQUQwRDtBQUMzRCxpQ0FBNkIsb0JBRTdCLENBQUMsQ0FGZ0Q7QUFtQmpEO0lBQUE7SUFFQSxDQUFDO0lBbkJEO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFBRSxrSkFLVDtZQUNELFVBQVUsRUFBQyxDQUFDLDBCQUFpQixFQUFFLGtDQUFlLENBQUM7U0FFbEQsQ0FBQztRQUNELGVBQU0sQ0FBQztZQUNKLEVBQUMsSUFBSSxFQUFDLEdBQUcsRUFBRSxTQUFTLEVBQUMsc0RBQXlCLEVBQUM7WUFDL0MsRUFBQyxJQUFJLEVBQUMsY0FBYyxFQUFFLFNBQVMsRUFBQyw0Q0FBb0IsRUFBQztTQUN4RCxDQUFDOztvQkFBQTtJQUtGLG1CQUFDO0FBQUQsQ0FGQSxBQUVDLElBQUE7QUFGWSxvQkFBWSxlQUV4QixDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydHtSb3V0ZXMsIFJPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInXG5pbXBvcnR7Rm9yZWlnblRyYW5zZmVyc0NvbXBvbmVudH0gZnJvbSAnLi9mb3JlaWduVHJhbnNmZXJzLmNvbXBvbmVudCdcbmltcG9ydHtUcmF2ZWxOb3Rlc0NvbXBvbmVudH0gZnJvbSAnLi90cmF2ZWxub3Rlcy5jb21wb25lbnQnXG5pbXBvcnR7SGVhZGVyQ29tcG9uZW50fSBmcm9tICcuL2hlYWRlci5jb21wb25lbnQnXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICB0ZW1wbGF0ZTogYCBcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGZ4LWhlYWRlcj48L2Z4LWhlYWRlcj5cbiAgICAgICAgICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cbiAgICAgICAgPC9kaXY+ICAgIFxuICAgIGAsXG4gICAgZGlyZWN0aXZlczpbUk9VVEVSX0RJUkVDVElWRVMsIEhlYWRlckNvbXBvbmVudF1cblxufSlcbkBSb3V0ZXMoW1xuICAgIHtwYXRoOicvJywgY29tcG9uZW50OkZvcmVpZ25UcmFuc2ZlcnNDb21wb25lbnR9LFxuICAgIHtwYXRoOicvdHJhdmVsbm90ZXMnLCBjb21wb25lbnQ6VHJhdmVsTm90ZXNDb21wb25lbnR9LFxuXSlcblxuXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgICBcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
