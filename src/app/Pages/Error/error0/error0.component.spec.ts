import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Error0Component } from './error0.component';

describe('Error0Component', () => {
  let component: Error0Component;
  let fixture: ComponentFixture<Error0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Error0Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Error0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
