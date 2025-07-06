import { Component, Input, Pipe } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { IProduct } from '../../../Core/Models/Interface/product';
import { Router, RouterModule, Routes } from '@angular/router';
import { ProductselectedService } from '../../../Core/Services/productselected.service';
import { CarritoService } from '../../../Core/Services/carrito.service';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [CommonModule,RouterModule,ToastModule],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css',
  providers:[MessageService]
})
export class ProductoComponent {
@Input() producto:IProduct=<IProduct>{};

  
constructor(private selected:ProductselectedService,private router: Router,private carrito:CarritoService,private messageService: MessageService) {
}
onSelected(valor:any){
  this.selected.SeTProducto(valor);
  this.router.navigate(['tienda/productodetail']);
}
addItemCarrito(){
  this.carrito.addItemCarrito(this.producto);
  this.show();
}
show() {
  this.messageService.add({ severity: 'success', summary: 'Agregado', detail: 'Agregado al carrito' });
}
}
