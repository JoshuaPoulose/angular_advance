import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get<Product[]>("http://localhost:8080/product/api.2.0/retrieve/all")
  }

  saveProduct(product:Product):Observable<Object>{
    return this.http.post("http://localhost:8080/product/api.2.0/create",product);
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`http://localhost:8080/product/api.2.0/retrieve/${id}`);
  }

  updateProduct(id:number,product: Product): Observable<Object> {
    return this.http.put(`http://localhost:8080/product/api.2.0/update/${id}`, product);
  }

  saveUpdate(product:Product):Observable<Object>{
    return this.http.post("http://localhost:8080/product/api.2.0/create",product);
  }
  deleteProduct(id: number):Observable<Product>{
    return this.http.get<Product>(`http://localhost:8080/product/api.2.0/delete/${id}`);
  }
}