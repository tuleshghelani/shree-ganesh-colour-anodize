import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColourAnodizingComponent } from './colour-anodizing.component';

describe('ColourAnodizingComponent', () => {
  let component: ColourAnodizingComponent;
  let fixture: ComponentFixture<ColourAnodizingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColourAnodizingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColourAnodizingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
