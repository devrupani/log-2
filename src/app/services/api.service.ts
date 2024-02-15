import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { GetData } from '../GetData';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  api = 'http://localhost:3000/api/users';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<GetData[]> {
    return this.http.get<GetData[]>(this.api)
  }

  getPostsById(id: number): Observable<GetData[]> {
    return this.http.get<GetData[]>(this.api + '/' + id)
  }

  getDeletebyId(id:number) : Observable<GetData[]>{
    return this.http.delete<GetData[]>(this.api + '/' + id)

  }


  // createData(id:number,userId:number,title:string,body:string) : Observable<GetData[]>{
  //   return this.http.post<GetData[]>(this.api)
  // }




}
