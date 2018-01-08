import { Component, OnInit, Input } from '@angular/core';

/**
 *
 * 定义滚动加载组件
 * @export
 * @class ScrollComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.css']
})
export class ScrollComponent implements OnInit {
  @Input() public list = [];     // ngFor循环数组
  @Input() public start = 0;     // ngFor默认遍历起点
  @Input() public end = 20;    // ngFor默认遍历终点
  @Input() public height = 200;    // div固定高度
  @Input() private loadNum = 20;    // 每次滚动到底部加载的数量
  private listNum: Number;

  ngOnInit() {
    this.listNum = this.list.length;
    if (this.end < this.start) {
      alert('end必须大于start');
    }
  }

  /**
   *
   * 滑动滚动条时触发，到达底部后控制ngFor追加数据
   * @param {*} event 当前dom节点
   * @memberof ScrollComponent
   */
  wheelChange(event: any) {
    // 获取滚动条滚动高度
    const scrollTop = event.target.scrollTop;
    // 获取整个div的高度
    const scrollHeight = event.target.scrollHeight;

    if ((scrollTop + this.height) === scrollHeight) {
      if (this.end < this.listNum) {
        // 每次滚动到最底部就多加载20个
        this.end += this.loadNum;
      }
    }
  }
}
