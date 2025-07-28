import { NgFor, NgIf } from '@angular/common';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [NgIf,NgFor],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent implements OnInit, OnDestroy {
  @Input() slides: any[] = [];
  @Input() autoRotate = true;
  @Input() rotationInterval = 5000;

  currentIndex = 0;
  private intervalId: any;

  ngOnInit(): void {
    if (this.autoRotate && this.slides.length > 1) {
      this.startAutoRotation();
    }
  }

  ngOnDestroy(): void {
    this.clearAutoRotation();
  }

  goToSlide(index: number): void {
    this.currentIndex = index;
    this.resetAutoRotation();
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    this.resetAutoRotation();
  }

  prevSlide(): void {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    this.resetAutoRotation();
  }

  private startAutoRotation(): void {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, this.rotationInterval);
  }

  private resetAutoRotation(): void {
    if (this.autoRotate) {
      this.clearAutoRotation();
      this.startAutoRotation();
    }
  }

  private clearAutoRotation(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
