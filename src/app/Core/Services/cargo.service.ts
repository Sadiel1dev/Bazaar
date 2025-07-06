import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICargo } from '../Models/Interface/cargo';

@Injectable({
  providedIn: 'root'
})
export class CargoService {

  objeto:ICargo= <ICargo>{};

  private baseUrl: string = 'http://localhost:5077/api/Cargo';
  private baseUrlGetAll : string='http://localhost:5077/api/Cargo';
  private baseUrlRemove : string='http://localhost:5077/api/Cargo/id?id=';
  private baseUrlEdit : string='http://localhost:5077/api/Cargo';
  constructor(private http: HttpClient) { } 

  Agregar(dato:string){
    this.objeto.descripcion=dato;
   return this.http.post(this.baseUrl,this.objeto);
  }
  ObtenerTodo(){
    return this.http.get(this.baseUrlGetAll);
  }
  Eliminar(id:number){
    return this.http.delete(this.baseUrlRemove+id);
  }
  Editar(objeto:any){
    return this.http.put(this.baseUrlEdit,objeto);
  }
}
