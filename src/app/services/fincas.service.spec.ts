import { TestBed, inject } from '@angular/core/testing';

import { FincasService } from './fincas.service';

describe('FincasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FincasService]
    });
  });

  it('should be created', inject([FincasService], (service: FincasService) => {
    expect(service).toBeTruthy();
  }));
});
