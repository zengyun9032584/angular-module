import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DivBindComponent implements OnInit {
  public divContent = 'this is a Two-way bind div';
  constructor() { }

  ngOnInit() {
  }

}
