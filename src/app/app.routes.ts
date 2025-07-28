import { Routes } from '@angular/router';
import { LandingPageComponent } from './Pages/Presentacion/landing-page/landing-page.component';
import { TiendaComponent } from './Pages/Tienda/tienda/tienda.component';
import { ProductdetailComponent } from './Pages/Tienda/productdetail/productdetail.component';
import { CuerpoComponent } from './Pages/Tienda/cuerpo/cuerpo.component';
import { ErrortestComponent } from './Pages/errortest/errortest.component';
import { Error500Component } from './Pages/Error/error500/error500.component';
import { Error400Component } from './Pages/Error/error400/error400.component';
import { Error404Component } from './Pages/Error/error404/error404.component';
import { Error0Component } from './Pages/Error/error0/error0.component';
import { CarritoComponent } from './Pages/Tienda/carrito/carrito.component';
import { LoginComponent } from './Pages/Tienda/login/login.component';
import { RegisterComponent } from './Pages/Tienda/register/register.component';
import { InformacionComponent } from './Pages/Presentacion/informacion/informacion.component';
import { MainPageComponent } from './Pages/Landing/main-page/main-page.component';

export const routes: Routes = [
    {path:"" ,component:LandingPageComponent},
    {path:"login" ,component:LoginComponent},
    {path:"register" ,component:RegisterComponent},
    {path:"info/:id" ,component:InformacionComponent, 
        runGuardsAndResolvers: 'always',},
    {path:"error",
        component:ErrortestComponent,
        children: [
            { path: '0', component: Error0Component },
            { path: '500', component: Error500Component },
            { path: '400', component: Error400Component },
            { path: '404', component: Error404Component },
          ]
    },
    {path:"tienda" ,
        component:TiendaComponent,
        children: [
            { path: '', component: CuerpoComponent },
            { path: 'shop', component: CuerpoComponent },
            { path: 'productodetail', component: ProductdetailComponent },
            { path: 'carrito', component: CarritoComponent },
          ]
    },
    {path:'**',redirectTo:'',pathMatch:'full'}
];
