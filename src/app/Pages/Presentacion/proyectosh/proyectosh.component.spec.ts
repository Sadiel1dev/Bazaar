import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectoshComponent } from './proyectosh.component';

describe('ProyectoshComponent', () => {
  let component: ProyectoshComponent;
  let fixture: ComponentFixture<ProyectoshComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProyectoshComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectoshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
