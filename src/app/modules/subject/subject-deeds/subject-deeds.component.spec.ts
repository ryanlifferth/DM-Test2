import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectDeedsComponent } from './subject-deeds.component';

describe('SubjectDeedsComponent', () => {
  let component: SubjectDeedsComponent;
  let fixture: ComponentFixture<SubjectDeedsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectDeedsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectDeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
