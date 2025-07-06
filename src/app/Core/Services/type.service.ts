import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPaginator } from '../Models/Interface/paginador';
import { IType } from '../Models/Interface/type';
import { Constants } from '../Constant/Constant';

@Injectable({
  providedIn: 'root'
})
export class TypeService {

  objeto:IType= <IType>{};

  private baseUrlGetAll : string=Constants.API_URL+'/api/Type';
  constructor(private http: HttpClient) { } 

  
  ObtenerTodo(){
  
    return this.http.get(this.baseUrlGetAll);
   
  }
}
