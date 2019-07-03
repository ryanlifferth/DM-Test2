import { TestBed } from '@angular/core/testing';

import { CompHeaderService } from './comp-header.service';

describe('CompHeaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompHeaderService = TestBed.get(CompHeaderService);
    expect(service).toBeTruthy();
  });
});
