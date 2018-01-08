import { Directive, ElementRef, Input, Output, HostListener, EventEmitter, OnChanges } from '@angular/core';

/**
 *
 * 实现可编辑div的双向绑定
 * @export
 * @class BindDirective
 * @implements {OnChanges}
 */
@Directive({
  selector: '[appDataBind]'
})
export class BindDirective implements OnChanges {
  // tslint:disable-next-line:no-input-rename
  @Input('appDataBind') model: any;
  // tslint:disable-next-line:no-output-rename
  @Output('appDataBindChange') update = new EventEmitter();

  constructor(private elementRef: ElementRef) {
  }

  /**
   *
   * 当model值改变时同时改变dom中的值
   * @param {any} changes Input改变的内容
   * @memberof BindDirective
   */
  ngOnChanges(changes) {
    if (changes.model.isFirstChange()) {
      // 初始化赋值给html
      this.elementRef.nativeElement.innerText = this.model;
    }
  }

  /**
   *
   * 监听输入变化，向上传递内容,改变model的值
   * @memberof BindDirective
   */
  @HostListener('input') onEdit() {
    this.update.emit(this.elementRef.nativeElement.innerText);
  }

}
