import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparablesComponent } from './comparables.component';

describe('ComparablesComponent', () => {
  let component: ComparablesComponent;
  let fixture: ComponentFixture<ComparablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComparablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
