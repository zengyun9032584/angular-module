import { Component } from '@angular/core';

/**
 *
 * 双向绑定demo
 * @export
 * @class DivBindComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DivBindComponent {
  public divContent = 'this is a Two-way bind div';
  constructor() { }
}
