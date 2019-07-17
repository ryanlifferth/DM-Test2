import { TestBed } from '@angular/core/testing';

import { MlsSearchService } from './mls-search.service';

describe('MlsSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MlsSearchService = TestBed.get(MlsSearchService);
    expect(service).toBeTruthy();
  });
});
