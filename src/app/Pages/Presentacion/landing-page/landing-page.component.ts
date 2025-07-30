import { Component, OnInit } from '@angular/core';
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
import { ProyectoshComponent } from "../proyectosh/proyectosh.component";
import { CarouselComponent } from "../../../Shared/ReusableComponents/carousel/carousel.component";
import { Platform } from '@angular/cdk/platform';
import { ServicesallComponent } from "../servicesall/servicesall.component";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [RouterLink, CommonModule, HeroComponent, VentajasComponent, PrecioComponent, AplicationComponent, ProyectosComponent, ContactoComponent, TopComponent, ProyectoshComponent, CarouselComponent, ServicesallComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent implements OnInit{
   
  expression=false;
  isAndroid:boolean=false;
 constructor(public platform: Platform) {
  }
  
  //   abrir():void {
  //     if(this.expression==false){
  //       this.expression=true;
  //     }else{
  //       this.expression=false;
  //     }
  //  }

   ngOnInit(): void {
     this.isAndroid=this.platform.ANDROID;
  const header = document.querySelector("[data-header]") as HTMLElement;
  const navbarMenu = document.getElementById("menu") as HTMLElement;
  const burgerMenu = document.getElementById("burger") as HTMLElement;
  const headerMenu = document.getElementById("header") as HTMLElement;

  const activeEl = () => {
    if (window.scrollY > 100) {
      header?.classList.add("active");
    } else {
      header?.classList.remove("active");
    }
  };

  window.addEventListener("scroll", activeEl);

  if (burgerMenu && navbarMenu) {
    burgerMenu.addEventListener("click", () => {
      burgerMenu.classList.toggle("is-active");
      navbarMenu.classList.toggle("is-active");
    });
  }

  document.querySelectorAll(".menu-link").forEach((link) => {
    link.addEventListener("click", () => {
      burgerMenu?.classList.remove("is-active");
      navbarMenu?.classList.remove("is-active");
    });
  });

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 85) {
      headerMenu?.classList.add("on-scroll");
    } else {
      headerMenu?.classList.remove("on-scroll");
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      if (navbarMenu?.classList.contains("is-active")) {
        navbarMenu.classList.remove("is-active");
      }
    }
  });
}
   getWhatsAppLink(): string {
  const phoneNumber = '+5352529615'; // Reemplaza con tu número (sin +)
  const message = encodeURIComponent('Hola, estoy interesado en tus servicios');
  return `https://wa.me/${phoneNumber}?text=${message}`;
}
}
