import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayFiltersComponent } from './array-filters.component';

describe('ArrayFiltersComponent', () => {
  let component: ArrayFiltersComponent;
  let fixture: ComponentFixture<ArrayFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrayFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrayFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
