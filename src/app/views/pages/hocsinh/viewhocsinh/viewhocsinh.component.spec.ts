import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewhocsinhComponent } from './viewhocsinh.component';

describe('ViewhocsinhComponent', () => {
  let component: ViewhocsinhComponent;
  let fixture: ComponentFixture<ViewhocsinhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewhocsinhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewhocsinhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
