import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingPageComponent } from "./Pages/Presentacion/landing-page/landing-page.component";
import { AccountService } from './Core/Services/account.service';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ToastModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'DevsBazaar';
/**
 *
 */
constructor(private account:AccountService) {
}

ngOnInit(): void {
  this.loadUser();
}
loadUser(){
  const token = localStorage.getItem('TokkenBazaar');
  if(token){
    this.account.loadCurrentUser(token).subscribe();
  }
}

}
