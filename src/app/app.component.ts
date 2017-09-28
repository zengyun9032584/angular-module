import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  list = [];     // ngFor循环数组
  start = 0;     // ngFor默认遍历起点
  end = 20;    // ngFor默认遍历终点
  height = 200;    // div固定高度

  ngOnInit() {
    // 初始list数量
    for (let index = 0; index < 1000; index++) {
      this.list.push('item' + index);
    }
  }

  wheelChange(event: any) {
    // 获取滚动条滚动高度
    const scrollTop = event.target.scrollTop;
    // 获取整个div的高度
    const scrollHeight = event.target.scrollHeight;

    if ((scrollTop + 200) === scrollHeight) {
      if (this.end < 1000) {
        // 每次滚动到最底部就多加载100个
        this.end += 100;
      }
    }
  }
}
