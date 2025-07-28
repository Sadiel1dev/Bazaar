import { Component, HostListener, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingPageComponent } from "./Pages/Presentacion/landing-page/landing-page.component";
import { AccountService } from './Core/Services/account.service';
import { ToastModule } from 'primeng/toast';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ToastModule,CommonModule],
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
  cursorX = 0;
  cursorY = 0;

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.cursorX = event.clientX;
    this.cursorY = event.clientY;
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
