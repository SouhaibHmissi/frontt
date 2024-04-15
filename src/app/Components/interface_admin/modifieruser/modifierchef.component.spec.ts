import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierchefComponent } from './modifierchef.component';

describe('ModifierchefComponent', () => {
  let component: ModifierchefComponent;
  let fixture: ComponentFixture<ModifierchefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModifierchefComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModifierchefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
