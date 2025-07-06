import { Injectable } from '@angular/core';
import { Constants } from '../Constant/Constant';
import { HttpClient, HttpErrorResponse, HttpEvent } from '@angular/common/http';
import { BehaviorSubject, catchError, finalize, map, Observable, of, throwError } from 'rxjs';
import { Carrito } from '../Models/Class/CarritoImplement';
import { ICarrito, IItem } from '../Models/Interface/carrito';
import { IProduct } from '../Models/Interface/product';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  
  private baseUrlGetAll : string=Constants.API_URL;
  private carritoRecurso = new BehaviorSubject<ICarrito>(new Carrito());
  basket$ = this.carritoRecurso.asObservable();

  constructor(private http:HttpClient) { }

  getCarrito(id:string|undefined){
    return this.http.get<ICarrito>(this.baseUrlGetAll+'/api/Carrito?id='+id);
  }
  setCarrito(carrito:ICarrito){
    return this.http.post<ICarrito>(this.baseUrlGetAll+'/api/Carrito',carrito);
  }
  deleteCarrito(basket: ICarrito) {
    return this.http.delete<ICarrito>(this.baseUrlGetAll + '/api/Carrito?id=' + basket.id);
  }
  // getCarritoActual(){
  //   return this.carritoRecurso.value;
  // }
  addItemCarrito(item:IProduct,cantidad=1){
    const itemAdd:IItem = this.mapProductToItem(item,cantidad);
    var carrito;
    if(localStorage.getItem('carrito_id')==null){
      localStorage.setItem('carrito_id',this.carritoRecurso.value.id);
      this.carritoRecurso.value.items = this.addOrUpdateItem(this.carritoRecurso.value.items,itemAdd,cantidad);
      this.setCarrito(this.carritoRecurso.value).subscribe();
    }
    else{
      this.getCarrito(localStorage.getItem('carrito_id')?.toString()).pipe(
        finalize(()=>{
          this.carritoRecurso.value.items = this.addOrUpdateItem(this.carritoRecurso.value.items,itemAdd,cantidad);
          this.setCarrito(this.carritoRecurso.value).subscribe();
        })
      ).subscribe(response=>{
        this.carritoRecurso.next({id:response.id,items:response.items});
      });
    }
  }
  removeItemCarrito(item:IItem){
    return this.getCarrito(localStorage.getItem('carrito_id')?.toString()).subscribe(response=>{
      if (response.items.some(x=>x.id===item.id)) {
        response.items=response.items.filter(x=>x.id!==item.id);
        if(response.items.length>0)
        { 
          this.setCarrito(response).subscribe();
        }
        else
          this.deleteCarrito(response);
      }
    });
    
  }
  
  addOrUpdateItem(items: IItem[], itemAdd: any, cantidad: number): IItem[] {
    const index =items.findIndex(i=>i.id===itemAdd.id);
    if (index===-1) {
      itemAdd.cantidad=cantidad;
      items.push(itemAdd);
    }else{
      items[index].cantidad += cantidad;
    }
    return items; 
  }
  // createCarrito(): ICarrito {
  //   const carrito=new Carrito();
  //   localStorage.setItem('carrito_id',carrito.id);
  //   console.log(carrito);
  //   return carrito;
  // }
  mapProductToItem(item: IProduct, cantidad: number): IItem {
    return{
      id:item.id,
      name:item.name,
      price:item.price,
      pictureUrl:item.pictureUrl,
      description:item.description,
      cantidad:cantidad,
      productBrandId:0,
      productTypeId:0,
    }
  }



}


