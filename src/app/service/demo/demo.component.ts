import { Component, OnInit } from '@angular/core';
import { AsyncService } from '../async.service';

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

  getData() {
    this.service.getData().then((result: any) => {
      this.data = result.passwd;
    }, error => {
      this.data = error;
    });
  }

}
