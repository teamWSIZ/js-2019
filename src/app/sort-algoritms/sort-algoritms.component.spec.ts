import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortAlgoritmsComponent } from './sort-algoritms.component';

describe('SortAlgoritmsComponent', () => {
  let component: SortAlgoritmsComponent;
  let fixture: ComponentFixture<SortAlgoritmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortAlgoritmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortAlgoritmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
