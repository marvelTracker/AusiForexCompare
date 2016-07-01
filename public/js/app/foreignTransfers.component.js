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
//import{DropdownDemoComponent} from './dropdown.component'
var ForeignTransfersComponent = (function () {
    function ForeignTransfersComponent() {
    }
    ForeignTransfersComponent = __decorate([
        core_1.Component({
            selector: 'oz-ftransfer',
            template: " <div class=\"row\">\n                        <div class=\"panel-searchbar panel-success\">\n                            <div class=\"panel-body\">\n                                <div class=\"col-sm-3\">\n                                    <p style=\"font-size: 30px\">I want to convert</p>\n                                </div>\n                                <div class=\"col-sm-2\">\n                                    <input type=\"text\" class=\"form-control input-lg\" value=\"1000\" />\n                                </div>\n                                <div class=\"col-sm-2\">\n                                        <select>\n                                            <option value=\"volvo\">AUD</option>\n                                            <option value=\"saab\">USD</option>\n                                            <option value=\"mercedes\">EUR</option>\n                                            <option value=\"audi\">YEN</option>\n                                        </select>\n                                </div>\n                                <div class=\"col-sm-1\" style=\"font-size: 30px\">To</div>\n                                <div class=\"col-sm-2\">\n                                    <select class=\"form-control select\" style=\"display: none;\">\n                                        <option>Option 1</option>\n                                        <option>Option 2</option>\n                                        <option>Option 3</option>\n                                        <option>Option 4</option>\n                                        <option>Option 5</option>\n                                    </select>\n                                    <button type=\"button\" class=\"btn dropdown-toggle btn-default btn-lg\" data-toggle=\"dropdown\" title=\"Option 1\" aria-expanded=\"false\"><span class=\"pull-left\">Option 1</span>&nbsp;<span class=\"caret\"></span></button>\n\n                                </div>\n                                <div class=\"col-sm-2\">\n                                    <button type=\"button\" class=\"btn btn-success btn-lg\">GO</button>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                        <div class=\"row\">\n                        <div class=\"panel panel-info\">\n                            <div class=\"panel-heading\">\n                                <h3 class=\"panel-title pull-left\">Commonwealth Bank</h3>\n                            </div>\n                            <div class=\"panel-body\">\n                                <div class=\"row\">\n                                    <div class=\"col-sm-1\">\n                                        <img src=\"layout/img/cba.gif\" class=\"pull-left\" style=\"width: 100px;height: 80px; padding-left:10px; padding-right:10px; padding-top:10px\" />\n                                    </div>\n                                    <div class=\"col-sm-6\">\n                                        <div class=\"alert alert-info\" role=\"alert\">\n                                            <strong>Exchange Rate</strong> 0.112234\n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-4\">\n                                        <div class=\"widget widget-primary\">\n                                            <div class=\"widget-title\">TOTAL</div>\n                                            <div class=\"widget-int\">$ <span data-toggle=\"counter\" data-to=\"1564\">1,564</span></div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"panel-footer\">\n                                <div class=\"row\">\n                                    <div class=\"col-sm-4 pull-left\">\n                                        <button type=\"button\" class=\"btn-tile btn-tile-success\" data-container=\"body\" data-toggle=\"popover\" data-placement=\"left\" data-content=\"Last Updated\" data-original-title=\"\" title=\"\" aria-describedby=\"popover845264\"><span class=\"fa fa fa-calendar\"></span></button>\n                                    </div>\n                                    <div class=\"col-sm-2 col-sm-push-6\">\n                                        <div>\n                                            <button type=\"button\" class=\"btn-tile btn-tile-warning\"><span class=\"fa fa-globe\"></span></button>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-2 col-sm-push-4\">\n                                        <div class=\"pull-right\">\n                                            <button type=\"button\" class=\"btn-tile btn-tile-danger\" data-container=\"body\" data-toggle=\"popover\" data-placement=\"left\" data-content=\"Disclaimer goes here\" data-original-title=\"\" title=\"\" aria-describedby=\"popover845264\"><span class=\"fa fa-exclamation-triangle\"></span></button>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"panel panel-info\">\n                            <div class=\"panel-heading\">\n                                <h3 class=\"panel-title pull-left\">NAB</h3>\n                            </div>\n                            <div class=\"panel-body\">\n                                <div class=\"row\">\n                                    <div class=\"col-sm-1\">\n                                        <img src=\"layout/img/nab.jpg\" class=\"pull-left\" style=\"width: 100px;height: 80px; padding-left:10px; padding-right:10px; padding-top:10px\" />\n                                    </div>\n                                    <div class=\"col-sm-6\">\n                                        <div class=\"alert alert-info\" role=\"alert\">\n                                            <strong>Exchange Rate</strong> 0.112234\n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-4\">\n                                        <div class=\"widget widget-primary\">\n                                            <div class=\"widget-title\">TOTAL</div>\n                                            <div class=\"widget-int\">$ <span data-toggle=\"counter\" data-to=\"1564\">1,564</span></div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"panel-footer\">\n                                <div class=\"row\">\n                                    <div class=\"col-sm-4 pull-left\">\n                                        <button type=\"button\" class=\"btn-tile btn-tile-success\" data-container=\"body\" data-toggle=\"popover\" data-placement=\"left\" data-content=\"Last Updated\" data-original-title=\"\" title=\"\" aria-describedby=\"popover845264\"><span class=\"fa fa fa-calendar\"></span></button>\n                                    </div>\n                                    <div class=\"col-sm-2 col-sm-push-6\">\n                                        <div>\n                                            <button type=\"button\" class=\"btn-tile btn-tile-warning\"><span class=\"fa fa-globe\"></span></button>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-2 col-sm-push-4\">\n                                        <div class=\"pull-right\">\n                                            <button type=\"button\" class=\"btn-tile btn-tile-danger\" data-container=\"body\" data-toggle=\"popover\" data-placement=\"left\" data-content=\"Disclaimer goes here\" data-original-title=\"\" title=\"\" aria-describedby=\"popover845264\"><span class=\"fa fa-exclamation-triangle\"></span></button>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"panel panel-info\">\n                            <div class=\"panel-heading\">\n                                <h3 class=\"panel-title pull-left\">ANZ</h3>\n                            </div>\n                            <div class=\"panel-body\">\n                                <div class=\"row\">\n                                    <div class=\"col-sm-1\">\n                                        <img src=\"layout/img/anz.png\" class=\"pull-left\" style=\"width: 100px;height: 80px; padding-left:10px; padding-right:10px; padding-top:10px\" />\n                                    </div>\n                                    <div class=\"col-sm-6\">\n                                        <div class=\"alert alert-info\" role=\"alert\">\n                                            <strong>Exchange Rate</strong> 0.112234\n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-4\">\n                                        <div class=\"widget widget-primary\">\n                                            <div class=\"widget-title\">TOTAL</div>\n                                            <div class=\"widget-int\">$ <span data-toggle=\"counter\" data-to=\"1564\">1,564</span></div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"panel-footer\">\n                                <div class=\"row\">\n                                    <div class=\"col-sm-4 pull-left\">\n                                        <button type=\"button\" class=\"btn-tile btn-tile-success\" data-container=\"body\" data-toggle=\"popover\" data-placement=\"left\" data-content=\"Last Updated\" data-original-title=\"\" title=\"\" aria-describedby=\"popover845264\"><span class=\"fa fa fa-calendar\"></span></button>\n                                    </div>\n                                    <div class=\"col-sm-2 col-sm-push-6\">\n                                        <div>\n                                            <button type=\"button\" class=\"btn-tile btn-tile-warning\"><span class=\"fa fa-globe\"></span></button>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-2 col-sm-push-4\">\n                                        <div class=\"pull-right\">\n                                            <button type=\"button\" class=\"btn-tile btn-tile-danger\" data-container=\"body\" data-toggle=\"popover\" data-placement=\"left\" data-content=\"Disclaimer goes here\" data-original-title=\"\" title=\"\" aria-describedby=\"popover845264\"><span class=\"fa fa-exclamation-triangle\"></span></button>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div><div class=\"panel panel-info\">\n                            <div class=\"panel-heading\">\n                                <h3 class=\"panel-title pull-left\">Westpac</h3>\n                            </div>\n                            <div class=\"panel-body\">\n                                <div class=\"row\">\n                                    <div class=\"col-sm-1\">\n                                        <img src=\"layout/img/westpac.jpg\" class=\"pull-left\" style=\"width: 100px;height: 80px; padding-left:10px; padding-right:10px; padding-top:10px\" />\n                                    </div>\n                                    <div class=\"col-sm-6\">\n                                        <div class=\"alert alert-info\" role=\"alert\">\n                                            <strong>Exchange Rate</strong> 0.112234\n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-4\">\n                                        <div class=\"widget widget-primary\">\n                                            <div class=\"widget-title\">TOTAL</div>\n                                            <div class=\"widget-int\">$ <span data-toggle=\"counter\" data-to=\"1564\">1,564</span></div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"panel-footer\">\n                                <div class=\"row\">\n                                    <div class=\"col-sm-4 pull-left\">\n                                        <button type=\"button\" class=\"btn-tile btn-tile-success\" data-container=\"body\" data-toggle=\"popover\" data-placement=\"left\" data-content=\"Last Updated\" data-original-title=\"\" title=\"\" aria-describedby=\"popover845264\"><span class=\"fa fa fa-calendar\"></span></button>\n                                    </div>\n                                    <div class=\"col-sm-2 col-sm-push-6\">\n                                        <div>\n                                            <button type=\"button\" class=\"btn-tile btn-tile-warning\"><span class=\"fa fa-globe\"></span></button>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-2 col-sm-push-4\">\n                                        <div class=\"pull-right\">\n                                            <button type=\"button\" class=\"btn-tile btn-tile-danger\" data-container=\"body\" data-toggle=\"popover\" data-placement=\"left\" data-content=\"Disclaimer goes here\" data-original-title=\"\" title=\"\" aria-describedby=\"popover845264\"><span class=\"fa fa-exclamation-triangle\"></span></button>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n    ",
        }), 
        __metadata('design:paramtypes', [])
    ], ForeignTransfersComponent);
    return ForeignTransfersComponent;
}());
exports.ForeignTransfersComponent = ForeignTransfersComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmVpZ25UcmFuc2ZlcnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMEIsZUFBZSxDQUFDLENBQUE7QUFDMUMsMkRBQTJEO0FBNk0zRDtJQUFBO0lBRUEsQ0FBQztJQTdNRDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsY0FBYztZQUN4QixRQUFRLEVBQUUseThjQXFNVDtTQUVKLENBQUM7O2lDQUFBO0lBSUYsZ0NBQUM7QUFBRCxDQUZBLEFBRUMsSUFBQTtBQUZZLGlDQUF5Qiw0QkFFckMsQ0FBQSIsImZpbGUiOiJmb3JlaWduVHJhbnNmZXJzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG4vL2ltcG9ydHtEcm9wZG93bkRlbW9Db21wb25lbnR9IGZyb20gJy4vZHJvcGRvd24uY29tcG9uZW50J1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ296LWZ0cmFuc2ZlcicsXHJcbiAgICB0ZW1wbGF0ZTogYCA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1zZWFyY2hiYXIgcGFuZWwtc3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9XCJmb250LXNpemU6IDMwcHhcIj5JIHdhbnQgdG8gY29udmVydDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2wgaW5wdXQtbGdcIiB2YWx1ZT1cIjEwMDBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwidm9sdm9cIj5BVUQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwic2FhYlwiPlVTRDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJtZXJjZWRlc1wiPkVVUjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJhdWRpXCI+WUVOPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTFcIiBzdHlsZT1cImZvbnQtc2l6ZTogMzBweFwiPlRvPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJmb3JtLWNvbnRyb2wgc2VsZWN0XCIgc3R5bGU9XCJkaXNwbGF5OiBub25lO1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5PcHRpb24gMTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5PcHRpb24gMjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5PcHRpb24gMzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5PcHRpb24gNDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5PcHRpb24gNTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gZHJvcGRvd24tdG9nZ2xlIGJ0bi1kZWZhdWx0IGJ0bi1sZ1wiIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIiB0aXRsZT1cIk9wdGlvbiAxXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCI+PHNwYW4gY2xhc3M9XCJwdWxsLWxlZnRcIj5PcHRpb24gMTwvc3Bhbj4mbmJzcDs8c3BhbiBjbGFzcz1cImNhcmV0XCI+PC9zcGFuPjwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3MgYnRuLWxnXCI+R088L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwgcGFuZWwtaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWhlYWRpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJwYW5lbC10aXRsZSBwdWxsLWxlZnRcIj5Db21tb253ZWFsdGggQmFuazwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwibGF5b3V0L2ltZy9jYmEuZ2lmXCIgY2xhc3M9XCJwdWxsLWxlZnRcIiBzdHlsZT1cIndpZHRoOiAxMDBweDtoZWlnaHQ6IDgwcHg7IHBhZGRpbmctbGVmdDoxMHB4OyBwYWRkaW5nLXJpZ2h0OjEwcHg7IHBhZGRpbmctdG9wOjEwcHhcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtaW5mb1wiIHJvbGU9XCJhbGVydFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+RXhjaGFuZ2UgUmF0ZTwvc3Ryb25nPiAwLjExMjIzNFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3aWRnZXQgd2lkZ2V0LXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid2lkZ2V0LXRpdGxlXCI+VE9UQUw8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid2lkZ2V0LWludFwiPiQgPHNwYW4gZGF0YS10b2dnbGU9XCJjb3VudGVyXCIgZGF0YS10bz1cIjE1NjRcIj4xLDU2NDwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS00IHB1bGwtbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4tdGlsZSBidG4tdGlsZS1zdWNjZXNzXCIgZGF0YS1jb250YWluZXI9XCJib2R5XCIgZGF0YS10b2dnbGU9XCJwb3BvdmVyXCIgZGF0YS1wbGFjZW1lbnQ9XCJsZWZ0XCIgZGF0YS1jb250ZW50PVwiTGFzdCBVcGRhdGVkXCIgZGF0YS1vcmlnaW5hbC10aXRsZT1cIlwiIHRpdGxlPVwiXCIgYXJpYS1kZXNjcmliZWRieT1cInBvcG92ZXI4NDUyNjRcIj48c3BhbiBjbGFzcz1cImZhIGZhIGZhLWNhbGVuZGFyXCI+PC9zcGFuPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0yIGNvbC1zbS1wdXNoLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4tdGlsZSBidG4tdGlsZS13YXJuaW5nXCI+PHNwYW4gY2xhc3M9XCJmYSBmYS1nbG9iZVwiPjwvc3Bhbj48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0yIGNvbC1zbS1wdXNoLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwdWxsLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4tdGlsZSBidG4tdGlsZS1kYW5nZXJcIiBkYXRhLWNvbnRhaW5lcj1cImJvZHlcIiBkYXRhLXRvZ2dsZT1cInBvcG92ZXJcIiBkYXRhLXBsYWNlbWVudD1cImxlZnRcIiBkYXRhLWNvbnRlbnQ9XCJEaXNjbGFpbWVyIGdvZXMgaGVyZVwiIGRhdGEtb3JpZ2luYWwtdGl0bGU9XCJcIiB0aXRsZT1cIlwiIGFyaWEtZGVzY3JpYmVkYnk9XCJwb3BvdmVyODQ1MjY0XCI+PHNwYW4gY2xhc3M9XCJmYSBmYS1leGNsYW1hdGlvbi10cmlhbmdsZVwiPjwvc3Bhbj48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsIHBhbmVsLWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1oZWFkaW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwicGFuZWwtdGl0bGUgcHVsbC1sZWZ0XCI+TkFCPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJsYXlvdXQvaW1nL25hYi5qcGdcIiBjbGFzcz1cInB1bGwtbGVmdFwiIHN0eWxlPVwid2lkdGg6IDEwMHB4O2hlaWdodDogODBweDsgcGFkZGluZy1sZWZ0OjEwcHg7IHBhZGRpbmctcmlnaHQ6MTBweDsgcGFkZGluZy10b3A6MTBweFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1pbmZvXCIgcm9sZT1cImFsZXJ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5FeGNoYW5nZSBSYXRlPC9zdHJvbmc+IDAuMTEyMjM0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndpZGdldCB3aWRnZXQtcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3aWRnZXQtdGl0bGVcIj5UT1RBTDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3aWRnZXQtaW50XCI+JCA8c3BhbiBkYXRhLXRvZ2dsZT1cImNvdW50ZXJcIiBkYXRhLXRvPVwiMTU2NFwiPjEsNTY0PC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTQgcHVsbC1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0bi10aWxlIGJ0bi10aWxlLXN1Y2Nlc3NcIiBkYXRhLWNvbnRhaW5lcj1cImJvZHlcIiBkYXRhLXRvZ2dsZT1cInBvcG92ZXJcIiBkYXRhLXBsYWNlbWVudD1cImxlZnRcIiBkYXRhLWNvbnRlbnQ9XCJMYXN0IFVwZGF0ZWRcIiBkYXRhLW9yaWdpbmFsLXRpdGxlPVwiXCIgdGl0bGU9XCJcIiBhcmlhLWRlc2NyaWJlZGJ5PVwicG9wb3Zlcjg0NTI2NFwiPjxzcGFuIGNsYXNzPVwiZmEgZmEgZmEtY2FsZW5kYXJcIj48L3NwYW4+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTIgY29sLXNtLXB1c2gtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0bi10aWxlIGJ0bi10aWxlLXdhcm5pbmdcIj48c3BhbiBjbGFzcz1cImZhIGZhLWdsb2JlXCI+PC9zcGFuPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTIgY29sLXNtLXB1c2gtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInB1bGwtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0bi10aWxlIGJ0bi10aWxlLWRhbmdlclwiIGRhdGEtY29udGFpbmVyPVwiYm9keVwiIGRhdGEtdG9nZ2xlPVwicG9wb3ZlclwiIGRhdGEtcGxhY2VtZW50PVwibGVmdFwiIGRhdGEtY29udGVudD1cIkRpc2NsYWltZXIgZ29lcyBoZXJlXCIgZGF0YS1vcmlnaW5hbC10aXRsZT1cIlwiIHRpdGxlPVwiXCIgYXJpYS1kZXNjcmliZWRieT1cInBvcG92ZXI4NDUyNjRcIj48c3BhbiBjbGFzcz1cImZhIGZhLWV4Y2xhbWF0aW9uLXRyaWFuZ2xlXCI+PC9zcGFuPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwgcGFuZWwtaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWhlYWRpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJwYW5lbC10aXRsZSBwdWxsLWxlZnRcIj5BTlo8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImxheW91dC9pbWcvYW56LnBuZ1wiIGNsYXNzPVwicHVsbC1sZWZ0XCIgc3R5bGU9XCJ3aWR0aDogMTAwcHg7aGVpZ2h0OiA4MHB4OyBwYWRkaW5nLWxlZnQ6MTBweDsgcGFkZGluZy1yaWdodDoxMHB4OyBwYWRkaW5nLXRvcDoxMHB4XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWluZm9cIiByb2xlPVwiYWxlcnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPkV4Y2hhbmdlIFJhdGU8L3N0cm9uZz4gMC4xMTIyMzRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid2lkZ2V0IHdpZGdldC1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndpZGdldC10aXRsZVwiPlRPVEFMPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndpZGdldC1pbnRcIj4kIDxzcGFuIGRhdGEtdG9nZ2xlPVwiY291bnRlclwiIGRhdGEtdG89XCIxNTY0XCI+MSw1NjQ8L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNCBwdWxsLWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuLXRpbGUgYnRuLXRpbGUtc3VjY2Vzc1wiIGRhdGEtY29udGFpbmVyPVwiYm9keVwiIGRhdGEtdG9nZ2xlPVwicG9wb3ZlclwiIGRhdGEtcGxhY2VtZW50PVwibGVmdFwiIGRhdGEtY29udGVudD1cIkxhc3QgVXBkYXRlZFwiIGRhdGEtb3JpZ2luYWwtdGl0bGU9XCJcIiB0aXRsZT1cIlwiIGFyaWEtZGVzY3JpYmVkYnk9XCJwb3BvdmVyODQ1MjY0XCI+PHNwYW4gY2xhc3M9XCJmYSBmYSBmYS1jYWxlbmRhclwiPjwvc3Bhbj48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMiBjb2wtc20tcHVzaC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuLXRpbGUgYnRuLXRpbGUtd2FybmluZ1wiPjxzcGFuIGNsYXNzPVwiZmEgZmEtZ2xvYmVcIj48L3NwYW4+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMiBjb2wtc20tcHVzaC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHVsbC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuLXRpbGUgYnRuLXRpbGUtZGFuZ2VyXCIgZGF0YS1jb250YWluZXI9XCJib2R5XCIgZGF0YS10b2dnbGU9XCJwb3BvdmVyXCIgZGF0YS1wbGFjZW1lbnQ9XCJsZWZ0XCIgZGF0YS1jb250ZW50PVwiRGlzY2xhaW1lciBnb2VzIGhlcmVcIiBkYXRhLW9yaWdpbmFsLXRpdGxlPVwiXCIgdGl0bGU9XCJcIiBhcmlhLWRlc2NyaWJlZGJ5PVwicG9wb3Zlcjg0NTI2NFwiPjxzcGFuIGNsYXNzPVwiZmEgZmEtZXhjbGFtYXRpb24tdHJpYW5nbGVcIj48L3NwYW4+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+PGRpdiBjbGFzcz1cInBhbmVsIHBhbmVsLWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1oZWFkaW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwicGFuZWwtdGl0bGUgcHVsbC1sZWZ0XCI+V2VzdHBhYzwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwibGF5b3V0L2ltZy93ZXN0cGFjLmpwZ1wiIGNsYXNzPVwicHVsbC1sZWZ0XCIgc3R5bGU9XCJ3aWR0aDogMTAwcHg7aGVpZ2h0OiA4MHB4OyBwYWRkaW5nLWxlZnQ6MTBweDsgcGFkZGluZy1yaWdodDoxMHB4OyBwYWRkaW5nLXRvcDoxMHB4XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWluZm9cIiByb2xlPVwiYWxlcnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPkV4Y2hhbmdlIFJhdGU8L3N0cm9uZz4gMC4xMTIyMzRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid2lkZ2V0IHdpZGdldC1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndpZGdldC10aXRsZVwiPlRPVEFMPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndpZGdldC1pbnRcIj4kIDxzcGFuIGRhdGEtdG9nZ2xlPVwiY291bnRlclwiIGRhdGEtdG89XCIxNTY0XCI+MSw1NjQ8L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNCBwdWxsLWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuLXRpbGUgYnRuLXRpbGUtc3VjY2Vzc1wiIGRhdGEtY29udGFpbmVyPVwiYm9keVwiIGRhdGEtdG9nZ2xlPVwicG9wb3ZlclwiIGRhdGEtcGxhY2VtZW50PVwibGVmdFwiIGRhdGEtY29udGVudD1cIkxhc3QgVXBkYXRlZFwiIGRhdGEtb3JpZ2luYWwtdGl0bGU9XCJcIiB0aXRsZT1cIlwiIGFyaWEtZGVzY3JpYmVkYnk9XCJwb3BvdmVyODQ1MjY0XCI+PHNwYW4gY2xhc3M9XCJmYSBmYSBmYS1jYWxlbmRhclwiPjwvc3Bhbj48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMiBjb2wtc20tcHVzaC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuLXRpbGUgYnRuLXRpbGUtd2FybmluZ1wiPjxzcGFuIGNsYXNzPVwiZmEgZmEtZ2xvYmVcIj48L3NwYW4+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMiBjb2wtc20tcHVzaC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHVsbC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuLXRpbGUgYnRuLXRpbGUtZGFuZ2VyXCIgZGF0YS1jb250YWluZXI9XCJib2R5XCIgZGF0YS10b2dnbGU9XCJwb3BvdmVyXCIgZGF0YS1wbGFjZW1lbnQ9XCJsZWZ0XCIgZGF0YS1jb250ZW50PVwiRGlzY2xhaW1lciBnb2VzIGhlcmVcIiBkYXRhLW9yaWdpbmFsLXRpdGxlPVwiXCIgdGl0bGU9XCJcIiBhcmlhLWRlc2NyaWJlZGJ5PVwicG9wb3Zlcjg0NTI2NFwiPjxzcGFuIGNsYXNzPVwiZmEgZmEtZXhjbGFtYXRpb24tdHJpYW5nbGVcIj48L3NwYW4+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgYCxcclxuICAgIC8vZGlyZWN0aXZlczpbRHJvcGRvd25EZW1vQ29tcG9uZW50XVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEZvcmVpZ25UcmFuc2ZlcnNDb21wb25lbnQge1xyXG4gICAgXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
