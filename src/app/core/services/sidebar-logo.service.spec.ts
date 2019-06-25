import { TestBed } from '@angular/core/testing';

import { SidebarLogoService } from './sidebar-logo.service';

describe('SidebarLogoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SidebarLogoService = TestBed.get(SidebarLogoService);
    expect(service).toBeTruthy();
  });
});
