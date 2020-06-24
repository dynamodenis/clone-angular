import { TestBed } from '@angular/core/testing';

import { TrialquizService } from './trialquiz.service';

describe('TrialquizService', () => {
  let service: TrialquizService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrialquizService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
