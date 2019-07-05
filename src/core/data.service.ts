import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import {IModule,ILessons} from 'src/shared/Interfaces'
import { RequestOptions } from '@angular/http'


@Injectable()
export class DataService {
     bearer='Bearer 5d199c8763a13328ad7a15c5,eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkMTk5Yzg3NjNhMTMzMjhhZDdhMTVjNSIsImlhdCI6MTU2MTk1OTU1OSwiZXhwIjoxNTYyNTY0MzU5fQ.11QXokuYj3PiI966NXGrYrzr65UWGAYFaZj1ZrL2aLc';

    baseUrl: string = 'https://dev.getbasis.co/v1/users/5d199c8763a13328ad7a15c5/modules';
    
    constructor(private http: HttpClient) { }

    getModules() : Observable<IModule[]> {
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization': this.bearer
            })}


        return this.http.get<IModule[]>(this.baseUrl,httpOptions)
            .pipe(
                catchError(this.handleError)
            );
    }
            
    getOrders(id: number) : Observable<ILessons[]> {
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization': this.bearer
            })}
        return this.http.get<ILessons[]>(this.baseUrl,httpOptions)
          .pipe(
            map(les => {
              let custOrders = les.filter((order: ILessons) => order.result.module.id === id);
              return custOrders;
            }),
            catchError(this.handleError)
          );
      }

    private handleError(error: any) {
      console.error('server error:', error);
      if (error.error instanceof Error) {
          const errMessage = error.error.message;
          return Observable.throw(errMessage);
          // Use the following instead if using lite-server
          // return Observable.throw(err.text() || 'backend server error');
      }
      return Observable.throw(error || 'Node.js server error');
    }


}