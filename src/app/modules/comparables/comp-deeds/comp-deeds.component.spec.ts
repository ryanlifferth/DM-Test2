import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompDeedsComponent } from './comp-deeds.component';

describe('CompDeedsComponent', () => {
  let component: CompDeedsComponent;
  let fixture: ComponentFixture<CompDeedsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompDeedsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompDeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
