import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArraysortComponent } from './arraysort.component';

describe('ArraysortComponent', () => {
  let component: ArraysortComponent;
  let fixture: ComponentFixture<ArraysortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArraysortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArraysortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
