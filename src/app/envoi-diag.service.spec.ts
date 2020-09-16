import { TestBed } from '@angular/core/testing';

import { EnvoiDiagService } from './envoi-diag.service';

describe('EnvoiDiagService', () => {
  let service: EnvoiDiagService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnvoiDiagService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
