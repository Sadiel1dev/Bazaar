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

}
