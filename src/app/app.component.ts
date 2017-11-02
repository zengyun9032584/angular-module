import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public list = [];
  public name = 'zengyun';

  ngOnInit() {
    // 初始list数量
    for (let index = 0; index < 1000; index++) {
      this.list.push('item' + index);
    }
  }
}

