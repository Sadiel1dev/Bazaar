import { Component, ElementRef, OnInit, Renderer2, ViewChild, viewChild } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { ProductoComponent } from "../producto/producto.component";
import { ProductService } from '../../../Core/Services/product.service';
import { IPaginator } from '../../../Core/Models/Interface/paginador';
import { IProduct } from '../../../Core/Models/Interface/product';
import { TypeService } from '../../../Core/Services/type.service';
import { IType } from '../../../Core/Models/Interface/type';
import { ProductParams } from '../../../Core/Models/Class/productParams';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';
import { first } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cuerpo',
  standalone: true,
  imports: [CardComponent, ProductoComponent,PaginatorModule],
  templateUrl: './cuerpo.component.html',
  styleUrl: './cuerpo.component.css'
})
export class CuerpoComponent implements OnInit {
  
  @ViewChild('search',{static:false}) buscador:ElementRef | undefined;
  
  first: number=0;
  rows: number=12;
  imagenes:any[]=[];
  productos?: IProduct[]=[];
  types: IType[]=[];
  param = new ProductParams();
  totalCount:any;
  tomados:any;
  pagina:any;

  sortOptions=[
    {name:'Alfabeticamente',value:'name'},
    {name:'Precio: menor a mayor',value:'priceAsc'},
    {name:'Precio: mayor a menor',value:'priceDesc'}
  ]
  constructor(private productService: ProductService,private typeService:TypeService,private router: Router,private renderer: Renderer2) {
  }

 
  ngOnInit(): void {
    this.imagenes=['assets/svg/computadora.svg','assets/svg/laptop.svg','assets/svg/monitor.svg']
    this.CargarType();
    this.CargarProductos();
  }

  CargarType(){
  this.typeService.ObtenerTodo().subscribe((response:any)=>{
    this.types=response;
  })
  }

  CargarProductos(){
    const element = this.renderer.selectRootElement('#buscador', true);
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      
    this.productService.ObtenerTodo(this.param).subscribe(response=>{
      this.productos=response?.datos;
      this.totalCount=response?.total;
      this.tomados=response?.tomados;
      this.pagina=response?.pagina;
    });
     
      
  }

  SelectType(selected:number){
    this.param.typeid=selected;
    this.param.skip=0; 
    this.CargarProductos();
  }
  SelectSort(selected:string){
    this.param.sort=selected;
    this.CargarProductos();
  }
  onPageChange(event: any) {
    
    this.first = event.first;
    this.rows = event.rows;
    this.param.skip=this.first;
    this.param.take=this.rows;
    this.CargarProductos();
  }
  onSearch(){
    this.param.name=this.buscador?.nativeElement.value;
    this.param.skip=0;
    this.CargarProductos();
  }
}
