import { Component, OnInit } from '@angular/core';
import { AsyncService } from '../async.service';

/**
 *
 * Async调用APi服务demo
 * @export
 * @class AsyncDemoComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class AsyncDemoComponent implements OnInit {
  public data: Object;
  constructor(private service: AsyncService) { }

  ngOnInit() {
  }

  /**
   *
   * 调用service类中的getData()方法获取数据
   * @memberof AsyncDemoComponent
   */
  getData() {
    this.service.getData().then((result: any) => {
      this.data = result.passwd;
    }, error => {
      this.data = error;
    });
  }

}
