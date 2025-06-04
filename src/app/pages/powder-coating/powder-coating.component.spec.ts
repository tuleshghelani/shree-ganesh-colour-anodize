import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowderCoatingComponent } from './powder-coating.component';

describe('PowderCoatingComponent', () => {
  let component: PowderCoatingComponent;
  let fixture: ComponentFixture<PowderCoatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PowderCoatingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PowderCoatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
