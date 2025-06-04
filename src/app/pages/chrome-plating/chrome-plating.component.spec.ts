import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChromePlatingComponent } from './chrome-plating.component';

describe('ChromePlatingComponent', () => {
  let component: ChromePlatingComponent;
  let fixture: ComponentFixture<ChromePlatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChromePlatingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChromePlatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
