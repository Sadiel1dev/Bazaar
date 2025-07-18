import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from "../hero/hero.component";
import { SkillsComponent } from "../skills/skills.component";
import { ScrollComponent } from "../scroll/scroll.component";
import { SeguridadComponent } from "../seguridad/seguridad.component";
import { VentajasComponent } from "../ventajas/ventajas.component";
import { PrecioComponent } from "../precio/precio.component";
import { AplicationComponent } from "../aplication/aplication.component";
import { ProyectosComponent } from "../proyectos/proyectos.component";
import { ContactoComponent } from "../contacto/contacto.component";
import { TopComponent } from "../top/top.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [RouterLink,CommonModule, HeroComponent, SkillsComponent, ScrollComponent, SeguridadComponent, VentajasComponent, PrecioComponent, AplicationComponent, ProyectosComponent, ContactoComponent, TopComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
   
  expression=false;
    abrir():void {
      if(this.expression==false){
        this.expression=true;
      }else{
        this.expression=false;
      }
    
   }
}
