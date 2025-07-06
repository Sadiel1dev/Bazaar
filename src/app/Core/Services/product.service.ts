import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../Models/Interface/product';
import { map, Observable } from 'rxjs';
import { IPaginator } from '../Models/Interface/paginador';
import { ProductParams } from '../Models/Class/productParams';
import { Constants } from '../Constant/Constant';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  objeto:IProduct= <IProduct>{};

  private baseUrlGetAll : string=Constants.API_URL+'/api/Product';
  constructor(private http: HttpClient) { } 

  
  ObtenerTodo(param:ProductParams):Observable<IPaginator|null>{
  
    let params = new HttpParams()
    .set('sort', param.sort)
    .set('skip', param.skip)
    .set('take', param.take); 

    if (param.name) {
      params=params.append('name',param.name);  
    }
    if (param.typeid) {
      params=params.append('typeId',param.typeid.toString())
    }
    if (param.sort) {
      params=params.append('sort',param.sort)
    }
    return this.http.get<IPaginator>(this.baseUrlGetAll,{observe:'response',params})
    .pipe(
      map(response=>{
      return response.body;
    }),
  );
  }
  ObtenerPorId(valor:number){
    return this.http.get<IProduct>(this.baseUrlGetAll+'/id?id='+valor);
  }
}
