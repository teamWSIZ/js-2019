import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructorsExampleComponent } from './constructors-example.component';

describe('ConstructorsExampleComponent', () => {
  let component: ConstructorsExampleComponent;
  let fixture: ComponentFixture<ConstructorsExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstructorsExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstructorsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
