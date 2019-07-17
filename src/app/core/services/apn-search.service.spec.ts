import { TestBed } from '@angular/core/testing';

import { ApnSearchService } from './apn-search.service';

describe('ApnSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApnSearchService = TestBed.get(ApnSearchService);
    expect(service).toBeTruthy();
  });
});
