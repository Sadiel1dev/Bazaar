import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductselectedService {

  constructor() { }
  productSelected:number|undefined;

  SeTProducto(valor:number){
    this.productSelected=valor;
  }
  GetProducto(){
    return this.productSelected;
  }
}
