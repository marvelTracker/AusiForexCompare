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
var DropdownComponent = (function () {
    function DropdownComponent() {
        this.select = new core_1.EventEmitter();
    }
    DropdownComponent.prototype.ngOnInit = function () {
        this.select.emit(this.values[0]);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], DropdownComponent.prototype, "select", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], DropdownComponent.prototype, "values", void 0);
    DropdownComponent = __decorate([
        core_1.Component({
            selector: 'oz-dropdown',
            template: " <select class=\"btn-lg\" (change)=\"select.emit($event.target.value)\">\n               <option *ngFor=\"let value of values\">{{value}}</option>\n              </select>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], DropdownComponent);
    return DropdownComponent;
}());
exports.DropdownComponent = DropdownComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRyb3Bkb3duLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXFELGVBQWUsQ0FBQyxDQUFBO0FBU3JFO0lBQUE7UUFDWSxXQUFNLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7SUFNeEMsQ0FBQztJQUhDLG9DQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUxEO1FBQUMsYUFBTSxFQUFFOztxREFBQTtJQUNUO1FBQUMsWUFBSyxFQUFFOztxREFBQTtJQVRWO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFFBQVEsRUFBRSwrS0FHWDtTQUNBLENBQUM7O3lCQUFBO0lBUUYsd0JBQUM7QUFBRCxDQVBBLEFBT0MsSUFBQTtBQVBZLHlCQUFpQixvQkFPN0IsQ0FBQSIsImZpbGUiOiJkcm9wZG93bi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT3V0cHV0LCBJbnB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnb3otZHJvcGRvd24nLFxyXG4gIHRlbXBsYXRlOiBgIDxzZWxlY3QgY2xhc3M9XCJidG4tbGdcIiAoY2hhbmdlKT1cInNlbGVjdC5lbWl0KCRldmVudC50YXJnZXQudmFsdWUpXCI+XHJcbiAgICAgICAgICAgICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IHZhbHVlIG9mIHZhbHVlc1wiPnt7dmFsdWV9fTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEcm9wZG93bkNvbXBvbmVudCB7XHJcbiAgQE91dHB1dCgpIHNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBASW5wdXQoKSB2YWx1ZXM6YW55W107XHJcbiBcclxuICBuZ09uSW5pdCgpe1xyXG4gICAgdGhpcy5zZWxlY3QuZW1pdCh0aGlzLnZhbHVlc1swXSk7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
