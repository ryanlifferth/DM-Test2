import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketConditionsComponent } from './market-conditions.component';

describe('MarketConditionsComponent', () => {
  let component: MarketConditionsComponent;
  let fixture: ComponentFixture<MarketConditionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketConditionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketConditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
