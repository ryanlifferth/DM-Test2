import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { McDetailComponent } from './mc-detail.component';

describe('McDetailComponent', () => {
  let component: McDetailComponent;
  let fixture: ComponentFixture<McDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ McDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(McDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
