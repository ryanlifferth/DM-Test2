import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilesMapComponent } from './files-map.component';

describe('FilesMapComponent', () => {
  let component: FilesMapComponent;
  let fixture: ComponentFixture<FilesMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilesMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilesMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
