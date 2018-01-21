import { Component } from '@angular/core';
import { Router } from '@angular/router';

/**
 *
 * 系统根组件
 * @export
 * @class AppComponent
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public selectRow = 1;
  public smallScreen = false;    // 判断是否是小屏幕
  private linkTotal = 5;    // 记录<a>标签路由总个数
  private startLocX: number;    // 保存触控事件触发时的X坐标
  private routeArray = [];    // 存放每个模块的路由地址

  constructor(private route: Router) {
    // 初始化路由列表
    this.routeArray = ['scroll-load', 'filter', 'div-bind', 'async-service', 'time'];
    // 判断屏幕大小
    if (document.documentElement.clientWidth >= 500) {
      this.smallScreen = false;
    } else {
      this.smallScreen = true;
    }
  }

  /**
   *
   * 监听触控开始事件，获取当前触控位置
   * @param {*} event 触控对象
   * @memberof AppComponent
   */
  touchStart(event: any) {
    this.startLocX = event.targetTouches[0].pageX;
  }

  /**
   *
   * 监听触控结束事件，判断滑动方向
   * @param {*} event 触控对象
   * @memberof AppComponent
   */
  touchEnd(event: any) {
    if (event.changedTouches[0].pageX - this.startLocX > 5) {
      // 右滑动
      this.selectRow = this.selectRow === this.linkTotal ? 1 : this.selectRow + 1;
      // 滑动后自动跳路由
      this.linkRoute();
    }
    if (this.startLocX - event.changedTouches[0].pageX > 5) {
      // 左滑动
      this.selectRow = this.selectRow === 1 ? this.linkTotal : this.selectRow - 1;
      // 滑动后自动跳路由
      this.linkRoute();
    }
  }

  /**
   *
   * 使用navigate触发路由跳转
   * @memberof AppComponent
   */
  linkRoute() {
    this.route.navigate([`/${this.routeArray[this.selectRow - 1]}`]);
  }
}

