import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MlsSearchComponent } from './mls-search.component';

describe('MlsSearchComponent', () => {
  let component: MlsSearchComponent;
  let fixture: ComponentFixture<MlsSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MlsSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MlsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
