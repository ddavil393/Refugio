import { TestBed } from '@angular/core/testing';

import { AnimalesregistroService } from './animalesregistro.service';

describe('AnimalesregistroService', () => {
  let service: AnimalesregistroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimalesregistroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
