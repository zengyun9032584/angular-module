import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { promise } from 'selenium-webdriver';

@Injectable()
export class AsyncService {
    // inject Http Service
    constructor(private httpClient: HttpClient) { }

    /**
     *
     * 调用异步函数从后端获取数据
     * @returns {Promise<any>}
     * @memberof AsyncService
     */
    async getData(): Promise<any> {
        // 后端http地址
        const url = 'http://localhost:8081/list';
        const result = await this.httpClient.get(url).toPromise();
        return result;
    }
}
