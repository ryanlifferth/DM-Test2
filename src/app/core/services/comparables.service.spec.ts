import { TestBed } from '@angular/core/testing';

import { ComparablesService } from './comparables.service';

describe('ComparablesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComparablesService = TestBed.get(ComparablesService);
    expect(service).toBeTruthy();
  });
});
