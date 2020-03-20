import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortPlComponent } from './sort-pl.component';

describe('SortPlComponent', () => {
  let component: SortPlComponent;
  let fixture: ComponentFixture<SortPlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortPlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortPlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
