import {Component, Output, Input, EventEmitter} from '@angular/core';

@Component({
  selector: 'oz-dropdown',
  template: ` <select class="btn-lg" (change)="select.emit($event.target.value)">
               <option *ngFor="let value of values">{{value}}</option>
              </select>
`
})
export class DropdownComponent {
  @Output() select = new EventEmitter();
  @Input() values:any[];
 
  ngOnInit(){
    this.select.emit(this.values[0]);
  }
}
