import { CurrencyPipe, DatePipe, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ecommercedetail',
  standalone: true,
  imports: [NgIf,NgFor,CurrencyPipe,DatePipe],
  templateUrl: './ecommercedetail.component.html',
  styleUrl: './ecommercedetail.component.css'
})
export class EcommercedetailComponent {
service: any = {
    id: 1,
    title: 'Desarrollo de Tienda E-commerce Premium',
    category: 'Desarrollo Web',
    description: 'Tienda online completa con carrito de compras, pasarela de pago integrada, panel de administración y diseño responsive optimizado para SEO. Ideal para negocios que buscan expandir su presencia online.',
    featuredImage: 'https://images.unsplash.com/photo-1607082350899-7e105aa886ae?q=80',
    price: 1499.99,
    discountPrice: 1199.99,
    discount: 20,
    stock: 5,
    reviews: 42,
    images: [
      'https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80',
      'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80',
      'https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80',
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80'
    ],
    features: [
      { 
        icon: 'fas fa-shopping-cart', 
        title: 'Carrito de Compras', 
        description: 'Sistema completo con gestión de inventario en tiempo real' 
      },
      { 
        icon: 'fas fa-credit-card', 
        title: 'Pasarela de Pago', 
        description: 'Integración con MercadoPago, PayPal y tarjetas de crédito' 
      },
      { 
        icon: 'fas fa-mobile-alt', 
        title: 'Diseño Responsive', 
        description: 'Adaptado perfectamente a todos los dispositivos móviles' 
      },
      { 
        icon: 'fas fa-chart-line', 
        title: 'Analíticas Avanzadas', 
        description: 'Panel con métricas de ventas y comportamiento de usuarios' 
      },
      { 
        icon: 'fas fa-truck', 
        title: 'Gestión de Envíos', 
        description: 'Integración con principales empresas de logística' 
      },
      { 
        icon: 'fas fa-shield-alt', 
        title: 'Seguridad SSL', 
        description: 'Protección de datos y transacciones con certificado SSL' 
      }
    ],
    seller: {
      name: 'DevSolutions Pro',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      rating: 4.8,
      reviews: 128
    },
    reviewsList: [
      {
        user: {
          name: 'María López',
          avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
        },
        rating: 5,
        content: 'Excelente servicio! Mi tienda online quedó mejor de lo que esperaba. El equipo fue muy profesional y resolvieron todas mis dudas rápidamente.',
        date: '2023-10-15'
      },
      {
        user: {
          name: 'Carlos Mendoza',
          avatar: 'https://randomuser.me/api/portraits/men/22.jpg'
        },
        rating: 4,
        content: 'Buen trabajo en general, aunque hubo algunos retrasos en la entrega. La funcionalidad de la tienda es impecable y las ventas han aumentado un 40%.',
        date: '2023-09-28'
      }
    ]
  };

  lightboxOpen = false;
  selectedImage = '';

  constructor() { }

  ngOnInit(): void {
    // En una aplicación real, aquí obtendrías los datos de un servicio
  }

  openLightbox(image: string): void {
    this.selectedImage = image;
    this.lightboxOpen = true;
    document.body.style.overflow = 'hidden'; // Deshabilitar scroll
  }

  closeLightbox(): void {
    this.lightboxOpen = false;
    document.body.style.overflow = 'auto'; // Habilitar scroll
  }

  contactWhatsApp(): void {
    const phoneNumber = '+1234567890'; // Número de WhatsApp
    const message = encodeURIComponent(`Hola, estoy interesado en el servicio: ${this.service.title}`);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  }

  getStars(rating: number): number[] {
    return Array(Math.floor(rating)).fill(0);
  }
}
