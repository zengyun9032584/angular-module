import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  public list = [];

  ngOnInit() {
    // 初始list数量
    for (let index = 0; index < 1000; index++) {
      this.list.push('item' + index);
    }
  }

}
