import { Component, OnInit } from '@angular/core';

/**
 *
 * 过滤管道demo
 * @export
 * @class FilterComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  public inputVal = '';    // 获取搜索内容
  public list = [];    // 存放测试数据
  constructor() { }

  ngOnInit() {
    // 需要过滤的模拟数据
    this.list = [{ label: 'Cras justo odio' }, { label: 'Dapibus ac facilisis in' },
    { label: 'Morbi leo risus' }, { label: 'Porta ac consectetur ac' }, { label: 'Vestibulum at eros' }];
  }

}
