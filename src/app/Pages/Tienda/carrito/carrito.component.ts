import { Component, OnInit } from '@angular/core';
import { OrderListModule } from 'primeng/orderlist';
import { CarritoService } from '../../../Core/Services/carrito.service';
import { ICarrito, IItem } from '../../../Core/Models/Interface/carrito';
import { ButtonModule } from 'primeng/button';
import { finalize, pipe } from 'rxjs';

import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [OrderListModule,ButtonModule,ToastModule],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css',
  providers:[MessageService]
})
export class CarritoComponent implements OnInit{
products:any;

/**
 *
 */
constructor(private carrito:CarritoService,private messageService: MessageService) {
}
ngOnInit(){
    this.getCarrito();
}

getCarrito(){
  this.carrito.getCarrito(localStorage.getItem('carrito_id')?.toString()).subscribe((response:ICarrito)=>{
    this.products=response.items;
  });
}
deleteItem(item:IItem){
  this.carrito.getCarrito(localStorage.getItem('carrito_id')?.toString()).subscribe(response=>{
    if (response.items.some(x=>x.id===item.id)) {
      response.items=response.items.filter(x=>x.id!==item.id);
      if(response.items.length>0)
      { 
        this.carrito.setCarrito(response).pipe(
          finalize(()=>{
            this.getCarrito();
            this.show()
          })
        ).subscribe();
      }
      else
        this.carrito.deleteCarrito(response).pipe(
          finalize(()=>{
            this.getCarrito();
            this.show()
          })
        ).subscribe(response=>{
          localStorage.removeItem('carrito_id');
        });
    }
  },error=>{
    console.log(error)
  });
}
show() {
  this.messageService.add({ severity: 'success', summary: 'Eliminado', detail: 'Eliminado del carrito' });
}
}
