import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http:HttpClient) { }

  private api = 'https://api.escuelajs.co/api/v1/'
  
  getProductos(): Observable<any> {
    return this.http.get<any>(this.api+'products?offset=0&limit=8')
  }

}
