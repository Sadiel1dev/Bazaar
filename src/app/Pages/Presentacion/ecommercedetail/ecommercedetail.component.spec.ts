import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommercedetailComponent } from './ecommercedetail.component';

describe('EcommercedetailComponent', () => {
  let component: EcommercedetailComponent;
  let fixture: ComponentFixture<EcommercedetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcommercedetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcommercedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
