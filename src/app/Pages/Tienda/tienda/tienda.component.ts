import { Component, OnInit } from '@angular/core';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel'
import { CuerpoComponent } from "../cuerpo/cuerpo.component";
import { GalleriaModule } from 'primeng/galleria';
import { ProductService } from '../../../Core/Services/product.service';
import { IProduct } from '../../../Core/Models/Interface/product';
import { IPaginator } from '../../../Core/Models/Interface/paginador';
import { isObservable, Observable } from 'rxjs';
import { RouterLink, RouterOutlet } from '@angular/router';
import { IUser } from '../../../Core/Models/Interface/user';
import { AccountService } from '../../../Core/Services/account.service';

@Component({
  selector: 'app-tienda',
  standalone: true,
  imports: [MdbCarouselModule,GalleriaModule,RouterOutlet, RouterLink],
  templateUrl: './tienda.component.html',
  styleUrl: './tienda.component.css'
})
export class TiendaComponent implements OnInit{
images: any;
productos:IProduct[]=[];
currentUser$:Observable<IUser> | undefined;

/**
 *
 */
constructor(private account:AccountService) {
  this.currentUser$=account.$currentUser;
}
ngOnInit(): void {
  this.loadUser()
}
responsiveOptions: any[] = [
  {
      breakpoint: '1024px',
      numVisible: 5
  },
  {
      breakpoint: '768px',
      numVisible: 3
  },
  {
      breakpoint: '560px',
      numVisible: 1
  }
];
loadUser(){
  const token = localStorage.getItem('TokkenBazaar');
  if(token){
    this.account.loadCurrentUser(token).subscribe();
  }
}
logout(){
  this.account.Logout();
}
}
