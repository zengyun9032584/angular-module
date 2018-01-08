import { Pipe, PipeTransform } from '@angular/core';


/**
 *
 * 提供ngFor的关键字过滤功能
 * @export
 * @class FilterPipe
 * @implements {PipeTransform}
 */
@Pipe({
  name: 'filter',
  // pure: false
})
export class FilterPipe implements PipeTransform {
  /**
   *
   * 过滤数组，去掉不含关键字的索引
   * @param {*} value 初始数组
   * @param {any} args 函数剩余参数，至少两个，第一个参数作为过滤的关键字，第二个参数作为需要过滤的对象
   * @returns {*}
   * @memberof FilterPipe
   */
  transform(value: any, ...args): any {
    try {
      return value.filter(item => {
        // 返回过滤后的内容,需在使用时指定过滤的属性名
        return (item[args[1]].toUpperCase().indexOf(args[0].toUpperCase()) >= 0);
      });
    } catch (error) {
      return value;
    }
  }

}
