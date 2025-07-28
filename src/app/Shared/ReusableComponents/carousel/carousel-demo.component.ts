import { Component } from '@angular/core';
import { CarouselComponent } from './carousel.component';

@Component({
  selector: 'app-carousel-demo',
  standalone: true,
  imports: [CarouselComponent],
  template: `
    <div class="demo-container">
      <h1>Carousel Component Demo</h1>
      
      <app-carousel 
        [slides]="slides" 
        [autoRotate]="true" 
        [rotationInterval]="4000"
      ></app-carousel>
    </div>
  `,
  styles: [`
    .demo-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
    }
    
    h1 {
      text-align: center;
      margin-bottom: 30px;
      color: #333;
    }
  `]
})
export class CarouselDemoComponent {
  slides = [
    {
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=500&fit=crop',
      title: 'Bienvenido a Nuestra Plataforma',
      description: 'Descubre las mejores ofertas y productos de calidad en nuestro marketplace.',
      buttonText: 'Explorar Ahora',
      buttonLink: '/products'
    },
    {
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=500&fit=crop',
      title: 'Ofertas Especiales',
      description: 'Aprovecha nuestros descuentos exclusivos en productos seleccionados.',
      buttonText: 'Ver Ofertas',
      buttonLink: '/offers'
    },
    {
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=500&fit=crop',
      title: 'Nuevos Productos',
      description: 'Explora nuestra colección más reciente de productos innovadores.',
      buttonText: 'Descubrir',
      buttonLink: '/new-products'
    },
    {
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=500&fit=crop',
      title: 'Servicio al Cliente',
      description: 'Nuestro equipo está disponible 24/7 para ayudarte con cualquier consulta.',
      buttonText: 'Contactar',
      buttonLink: '/contact'
    }
  ];
} 