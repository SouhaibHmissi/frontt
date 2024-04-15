import { TestBed } from '@angular/core/testing';

import { SupprimerchefService } from './supprimerchef.service';

describe('SupprimerchefService', () => {
  let service: SupprimerchefService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupprimerchefService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
