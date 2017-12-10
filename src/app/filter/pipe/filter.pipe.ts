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
  transform(value: any, ...args): any {
    try {
      return value.filter(item => {
        // 返回过滤后的内容,需在使用时指定过滤的属性名
        return (item[args[1]].indexOf(args[0]) >= 0);
      });
    } catch (error) {
      return value;
    }
  }

}
