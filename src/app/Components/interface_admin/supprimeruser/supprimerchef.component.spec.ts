import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimerchefComponent } from './supprimerchef.component';

describe('SupprimerchefComponent', () => {
  let component: SupprimerchefComponent;
  let fixture: ComponentFixture<SupprimerchefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SupprimerchefComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SupprimerchefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
