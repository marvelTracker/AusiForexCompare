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
