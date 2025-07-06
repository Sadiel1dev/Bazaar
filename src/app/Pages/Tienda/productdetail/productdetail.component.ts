import { Component, OnInit } from '@angular/core';
import { ProductselectedService } from '../../../Core/Services/productselected.service';
import { ProductService } from '../../../Core/Services/product.service';
import { IProduct } from '../../../Core/Models/Interface/product';

import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';
import { CarritoService } from '../../../Core/Services/carrito.service';
import { IItem } from '../../../Core/Models/Interface/carrito';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-productdetail', 
  standalone: true,
  imports: [InputNumberModule,FormsModule,ToastModule],
  templateUrl: './productdetail.component.html',
  styleUrl: './productdetail.component.css',
  providers:[MessageService]
})
export class ProductdetailComponent implements OnInit{
select: any;
producto:IProduct=<IProduct>{};
imagen: any;
value3: any=1;
/**
 *
 */
constructor(private selected:ProductselectedService,private product:ProductService, private carrito:CarritoService,private messageService: MessageService) {
  this.select=selected.GetProducto();
}
ngOnInit(): void {
  this.GetProduct();
}
GetProduct(){
this.product.ObtenerPorId(this.select).subscribe(response=>{
  this.producto=response;
});

}
AddCar(){
  this.carrito.addItemCarrito(this.producto,this.value3);
  this.show();
}
show() {
  this.messageService.add({ severity: 'success', summary: 'Agregado', detail: 'Agregado al carrito' });
}
}
