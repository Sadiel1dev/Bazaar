import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { HerosComponent } from "../heros/heros.component";
import { ServicesComponent } from "../services/services.component";
import { AboutComponent } from "../about/about.component";
import { MobileAppComponent } from "../mobile-app/mobile-app.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [HeaderComponent, HerosComponent, ServicesComponent, AboutComponent, MobileAppComponent, FooterComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

}
