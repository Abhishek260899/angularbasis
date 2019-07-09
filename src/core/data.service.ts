import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

import  { Observable} from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import {IModule,ILessons, Iresults} from 'src/shared/Interfaces'
import { RequestOptions } from '@angular/http'


@Injectable()
export class DataService {
     bearer='Bearer 5ccbe400bb8d7046a927538c,eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjY2JlNDAwYmI4ZDcwNDZhOTI3NTM4YyIsImlhdCI6MTU2MjU3MTkxOCwiZXhwIjoxNTYzMTc2NzE4fQ.RgpNCV-m6GNrvuLEeqqeHKS38qH4pq57hj5lwA6frxI';
    baseUrl: string = 'https://dev.getbasis.co/v1/users/5ccbe400bb8d7046a927538c/modules';
    cardUrl:string="https://dev.getbasis.co/v1/modules/cards";
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
      getCards(cards): Observable<any>{
         const httpOptions={ 
        headers: new HttpHeaders({
            'Content-Type':  'application/json',
            'Authorization': this.bearer
          })}
          

          console.log("BODY: ", cards)
          
           return this.http.post<any>(this.cardUrl ,{ cards }, httpOptions)
          .pipe(
              catchError(this.handleError)
          )
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