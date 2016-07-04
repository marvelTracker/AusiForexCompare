import {Component} from '@angular/core';

@Component({
  selector: 'oz-dropdown',
  template: ` <select class="btn-lg">
                <option value="volvo">AUD</option>
                <option value="saab">USD</option>
                <option value="mercedes">EUR</option>
                <option value="audi">YEN</option>
              </select>
`
})
export class DropdownComponent {
 
}
