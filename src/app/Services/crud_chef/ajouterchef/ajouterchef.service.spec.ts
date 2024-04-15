import { TestBed } from '@angular/core/testing';

import { AjouterchefService } from './ajouterchef.service';

describe('AddchefService', () => {
  let service: AjouterchefService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AjouterchefService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
