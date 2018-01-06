import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef, ApplicationRef } from '@angular/core';
import { Observable } from 'rxjs/rx';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimeComponent implements OnInit, OnDestroy {
  obserStream: Observable<any>;    // 统计每秒计时
  subscribe: any;    // 结束订阅
  date = '';    // 保存当前日期
  hour = 0;    // 保存当前时间的时针
  minute = 0;    // 保存当前时间的分针
  second = 0;    // 保存当前时间的秒针
  constructor(private http: HttpClient, private cdref: ChangeDetectorRef) { }

  ngOnInit() {
    this.http.get('http://localhost:8081/getDate?param=all').subscribe((result: any) => {
      // 获取日期并用-替换/
      this.date = result.date.replace(/-/g, '/');
      // 获取时间
      [this.hour, this.minute, this.second] = result.time.split(':').map(value => Number(value));
      // 手动更新模板
      this.cdref.markForCheck();
      // 设置时钟
      this.obserStream = Observable.timer(0, 1000);
      this.subscribe = this.obserStream.subscribe(() => {
        this.second++;
        // 判断时间是否超出计时
        this.checkTimeOver(this.second);
      });
    });
  }

  /**
   *
   * 判断秒针，分针，时针是否超出计时
   * @param {number} second
   * @memberof TimeComponent
   */
  checkTimeOver(second: number) {
    if (this.second === 60) {
      this.second = 0;
      this.minute++;
      if (this.minute === 60) {
        this.minute = 0;
        this.hour++;
        if (this.hour === 24) {
          this.hour = 0;
          // 当时间归0，重新获取日期
          this.http.get('http://localhost:8081/getDate?param=date').subscribe((result: any) => {
            this.date = result.date;
            this.cdref.markForCheck();
          });
        }
      }
    }
    this.cdref.markForCheck();
  }

  ngOnDestroy() {
    try {
      if (this.subscribe) {
        this.subscribe.unsubscribe();
      }
    } catch (err) {
      console.log(err);
    }
  }

}
