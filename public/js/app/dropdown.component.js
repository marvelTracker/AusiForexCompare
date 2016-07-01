/*import {Component} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
import {DROPDOWN_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  selector: 'dropdown-demo',
  directives: [DROPDOWN_DIRECTIVES, CORE_DIRECTIVES],
  template: ` <div class="btn-group" dropdown [(isOpen)]="status.isopen">
    <button id="single-button" type="button" class="btn btn-primary" dropdownToggle [disabled]="disabled">
      Button dropdown <span class="caret"></span>
    </button>
    <ul class="dropdown-menu" role="menu" aria-labelledby="single-button">
      <li role="menuitem"><a class="dropdown-item" href="#">Action</a></li>
      <li role="menuitem"><a class="dropdown-item" href="#">Another action</a></li>
      <li role="menuitem"><a class="dropdown-item" href="#">Something else here</a></li>
      <li class="divider dropdown-divider"></li>
      <li role="menuitem"><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </div>
`
})
export class DropdownDemoComponent {
  public disabled:boolean = false;
  public status:{isopen:boolean} = {isopen: false};
  public items:Array<string> = ['The first choice!',
    'And another choice for you.', 'but wait! A third!'];

  public toggled(open:boolean):void {
    console.log('Dropdown is now: ', open);
  }

  public toggleDropdown($event:MouseEvent):void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }
}*/

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRyb3Bkb3duLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBb0NHIiwiZmlsZSI6ImRyb3Bkb3duLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0NPUkVfRElSRUNUSVZFU30gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHtEUk9QRE9XTl9ESVJFQ1RJVkVTfSBmcm9tICduZzItYm9vdHN0cmFwL25nMi1ib290c3RyYXAnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdkcm9wZG93bi1kZW1vJyxcclxuICBkaXJlY3RpdmVzOiBbRFJPUERPV05fRElSRUNUSVZFUywgQ09SRV9ESVJFQ1RJVkVTXSxcclxuICB0ZW1wbGF0ZTogYCA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwXCIgZHJvcGRvd24gWyhpc09wZW4pXT1cInN0YXR1cy5pc29wZW5cIj5cclxuICAgIDxidXR0b24gaWQ9XCJzaW5nbGUtYnV0dG9uXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgZHJvcGRvd25Ub2dnbGUgW2Rpc2FibGVkXT1cImRpc2FibGVkXCI+XHJcbiAgICAgIEJ1dHRvbiBkcm9wZG93biA8c3BhbiBjbGFzcz1cImNhcmV0XCI+PC9zcGFuPlxyXG4gICAgPC9idXR0b24+XHJcbiAgICA8dWwgY2xhc3M9XCJkcm9wZG93bi1tZW51XCIgcm9sZT1cIm1lbnVcIiBhcmlhLWxhYmVsbGVkYnk9XCJzaW5nbGUtYnV0dG9uXCI+XHJcbiAgICAgIDxsaSByb2xlPVwibWVudWl0ZW1cIj48YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiPkFjdGlvbjwvYT48L2xpPlxyXG4gICAgICA8bGkgcm9sZT1cIm1lbnVpdGVtXCI+PGEgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIj5Bbm90aGVyIGFjdGlvbjwvYT48L2xpPlxyXG4gICAgICA8bGkgcm9sZT1cIm1lbnVpdGVtXCI+PGEgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIj5Tb21ldGhpbmcgZWxzZSBoZXJlPC9hPjwvbGk+XHJcbiAgICAgIDxsaSBjbGFzcz1cImRpdmlkZXIgZHJvcGRvd24tZGl2aWRlclwiPjwvbGk+XHJcbiAgICAgIDxsaSByb2xlPVwibWVudWl0ZW1cIj48YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiPlNlcGFyYXRlZCBsaW5rPC9hPjwvbGk+XHJcbiAgICA8L3VsPlxyXG4gIDwvZGl2PlxyXG5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEcm9wZG93bkRlbW9Db21wb25lbnQge1xyXG4gIHB1YmxpYyBkaXNhYmxlZDpib29sZWFuID0gZmFsc2U7XHJcbiAgcHVibGljIHN0YXR1czp7aXNvcGVuOmJvb2xlYW59ID0ge2lzb3BlbjogZmFsc2V9O1xyXG4gIHB1YmxpYyBpdGVtczpBcnJheTxzdHJpbmc+ID0gWydUaGUgZmlyc3QgY2hvaWNlIScsXHJcbiAgICAnQW5kIGFub3RoZXIgY2hvaWNlIGZvciB5b3UuJywgJ2J1dCB3YWl0ISBBIHRoaXJkISddO1xyXG5cclxuICBwdWJsaWMgdG9nZ2xlZChvcGVuOmJvb2xlYW4pOnZvaWQge1xyXG4gICAgY29uc29sZS5sb2coJ0Ryb3Bkb3duIGlzIG5vdzogJywgb3Blbik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdG9nZ2xlRHJvcGRvd24oJGV2ZW50Ok1vdXNlRXZlbnQpOnZvaWQge1xyXG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB0aGlzLnN0YXR1cy5pc29wZW4gPSAhdGhpcy5zdGF0dXMuaXNvcGVuO1xyXG4gIH1cclxufSovXHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
