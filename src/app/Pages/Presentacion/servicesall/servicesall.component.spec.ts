import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesallComponent } from './servicesall.component';

describe('ServicesallComponent', () => {
  let component: ServicesallComponent;
  let fixture: ComponentFixture<ServicesallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesallComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
