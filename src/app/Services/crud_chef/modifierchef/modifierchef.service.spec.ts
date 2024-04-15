import { TestBed } from '@angular/core/testing';

import { ModifierchefService } from './modifierchef.service';

describe('ModifierchefService', () => {
  let service: ModifierchefService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModifierchefService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
