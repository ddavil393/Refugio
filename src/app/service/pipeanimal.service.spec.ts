import { TestBed } from '@angular/core/testing';

import { PipeanimalService } from './pipeanimal.service';

describe('PipeanimalService', () => {
  let service: PipeanimalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PipeanimalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
