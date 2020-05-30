import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortPlServiceComponent } from './sort-pl-service.component';

describe('SortPlServiceComponent', () => {
  let component: SortPlServiceComponent;
  let fixture: ComponentFixture<SortPlServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortPlServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortPlServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
