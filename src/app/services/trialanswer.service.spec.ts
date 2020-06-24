import { TestBed } from '@angular/core/testing';

import { TrialanswerService } from './trialanswer.service';

describe('TrialanswerService', () => {
  let service: TrialanswerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrialanswerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
