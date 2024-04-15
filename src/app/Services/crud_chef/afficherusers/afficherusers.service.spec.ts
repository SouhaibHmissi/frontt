import { TestBed } from '@angular/core/testing';

import { AfficherusersService } from './afficherusers.service';

describe('AfficherusersService', () => {
  let service: AfficherusersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AfficherusersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
