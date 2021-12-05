import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  // GET : http://localhost:3000/products
  getList(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/product');
  }
  
  // POST/id : http://localhost:3000/product
  create(data: any): Observable<any> {
    return this.http.post<any>('http://localhost:3000/product', data);
  }
  getOne(id: number): Observable<any> {
    return this.http.get<any>('http://localhost:3000/product/'+id);
  }
  // PUT : http://localhost:3000/products
  update(id: number, data: any): Observable<any> {
    return this.http.put<any>('http://localhost:3000/product/'+id, data);
  }
  // DELETE : http://localhost:3000/products
  delete(id: number): Observable<any> {
    return this.http.delete<any>('http://localhost:3000/product/'+id);
  }
}
