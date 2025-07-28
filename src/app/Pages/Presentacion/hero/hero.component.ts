import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  imagenURL = 'assets/images/test1.png';
  imagenURL1 = 'assets/images/test1.png';
  imagenURL2 = 'assets/images/test2.png';

   
  getWhatsAppLink(): void {
    const phoneNumber = '+5352529615'; // Reemplaza con tu número
    const message = 'Hola, estoy interesado en tus servicios';
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  }
}
