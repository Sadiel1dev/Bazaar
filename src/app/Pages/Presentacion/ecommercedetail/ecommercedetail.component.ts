import { CurrencyPipe, DatePipe, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-ecommercedetail',
  standalone: true,
  imports: [NgIf,NgFor,CurrencyPipe,DatePipe],
  templateUrl: './ecommercedetail.component.html',
  styleUrl: './ecommercedetail.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EcommercedetailComponent {


  lightboxOpen = false;
  selectedImage = '';
  @Input() service:any;
  constructor(private renderer: Renderer2,) { }

  ngOnInit(): void {
    this.service.reviewsList = this.service.reviewsList.map((review: { rating: number; }) => ({
    ...review,
    starsArray: Array(Math.floor(review.rating))
  }));
  }

  openLightbox(image: string): void {
    this.selectedImage = image;
    this.lightboxOpen = true;

  this.renderer.addClass(document.body, 'no-scroll');
    //document.body.style.overflow = 'hidden'; // Deshabilitar scroll
  }

  closeLightbox(): void {
    this.lightboxOpen = false;
    this.renderer.removeClass(document.body, 'no-scroll');
    //document.body.style.overflow = 'auto'; // Habilitar scroll
  }

  contactWhatsApp(): void {
    const phoneNumber = '+5352529615'; // Número de WhatsApp
    const message = encodeURIComponent(`Hola, estoy interesado en el servicio: ${this.service.title}`);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  }

}
