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
var searchpanel_component_1 = require('./searchpanel.component');
var resultpanel_component_1 = require('./resultpanel.component');
var ForeignTransfersComponent = (function () {
    function ForeignTransfersComponent() {
    }
    ForeignTransfersComponent.prototype.onGetSearchModel = function (searchModel) {
        this.source = searchModel.sourceCurrency;
        this.destination = searchModel.convertToCurrency;
    };
    ForeignTransfersComponent = __decorate([
        core_1.Component({
            selector: 'oz-ftransfer',
            template: " <div class=\"row\">\n                        <oz-searchpanel (getSearchModel)='onGetSearchModel()'></oz-searchpanel>\n                </div>\n                <div class=\"row\">\n                       <!--<oz-resultpanel></oz-resultpanel>      !-->  \n                       <div>source: {{source}}   </div>\n                       <div>destination:{{destination}} </div>        \n                </div>                      \n\n    ",
            directives: [searchpanel_component_1.SearchPanelComponent, resultpanel_component_1.ResultPanelComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], ForeignTransfersComponent);
    return ForeignTransfersComponent;
}());
exports.ForeignTransfersComponent = ForeignTransfersComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmVpZ25UcmFuc2ZlcnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMEIsZUFBZSxDQUFDLENBQUE7QUFDMUMsc0NBQW1DLHlCQUNuQyxDQUFDLENBRDJEO0FBQzVELHNDQUFtQyx5QkFDbkMsQ0FBQyxDQUQyRDtBQW1CNUQ7SUFBQTtJQVFBLENBQUM7SUFKRyxvREFBZ0IsR0FBaEIsVUFBaUIsV0FBd0I7UUFDckMsSUFBSSxDQUFDLE1BQU0sR0FBRyxXQUFXLENBQUMsY0FBYyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDLGlCQUFpQixDQUFDO0lBQ3JELENBQUM7SUF0Qkw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGNBQWM7WUFDeEIsUUFBUSxFQUFFLHFiQVNUO1lBQ0QsVUFBVSxFQUFDLENBQUMsNENBQW9CLEVBQUUsNENBQW9CLENBQUM7U0FDMUQsQ0FBQzs7aUNBQUE7SUFVRixnQ0FBQztBQUFELENBUkEsQUFRQyxJQUFBO0FBUlksaUNBQXlCLDRCQVFyQyxDQUFBIiwiZmlsZSI6ImZvcmVpZ25UcmFuc2ZlcnMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7U2VhcmNoUGFuZWxDb21wb25lbnR9IGZyb20gJy4vc2VhcmNocGFuZWwuY29tcG9uZW50J1xyXG5pbXBvcnQge1Jlc3VsdFBhbmVsQ29tcG9uZW50fSBmcm9tICcuL3Jlc3VsdHBhbmVsLmNvbXBvbmVudCdcclxuaW1wb3J0IHtJU2VhcmNoTW9kZWx9IGZyb20gJy4vbW9kZWwvU2VhcmNoTW9kZWwnXHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ296LWZ0cmFuc2ZlcicsXHJcbiAgICB0ZW1wbGF0ZTogYCA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvei1zZWFyY2hwYW5lbCAoZ2V0U2VhcmNoTW9kZWwpPSdvbkdldFNlYXJjaE1vZGVsKCknPjwvb3otc2VhcmNocGFuZWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICA8IS0tPG96LXJlc3VsdHBhbmVsPjwvb3otcmVzdWx0cGFuZWw+ICAgICAgIS0tPiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5zb3VyY2U6IHt7c291cmNlfX0gICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PmRlc3RpbmF0aW9uOnt7ZGVzdGluYXRpb259fSA8L2Rpdj4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgIGAsXHJcbiAgICBkaXJlY3RpdmVzOltTZWFyY2hQYW5lbENvbXBvbmVudCwgUmVzdWx0UGFuZWxDb21wb25lbnRdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRm9yZWlnblRyYW5zZmVyc0NvbXBvbmVudCB7XHJcbiAgICBzb3VyY2U6c3RyaW5nO1xyXG4gICAgZGVzdGluYXRpb246c3RyaW5nO1xyXG4gICAgXHJcbiAgICBvbkdldFNlYXJjaE1vZGVsKHNlYXJjaE1vZGVsOklTZWFyY2hNb2RlbCk6dm9pZHtcclxuICAgICAgICB0aGlzLnNvdXJjZSA9IHNlYXJjaE1vZGVsLnNvdXJjZUN1cnJlbmN5O1xyXG4gICAgICAgIHRoaXMuZGVzdGluYXRpb24gPSBzZWFyY2hNb2RlbC5jb252ZXJ0VG9DdXJyZW5jeTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
