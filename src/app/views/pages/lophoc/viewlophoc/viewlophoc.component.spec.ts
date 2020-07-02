import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewlophocComponent } from './viewlophoc.component';

describe('ViewlophocComponent', () => {
  let component: ViewlophocComponent;
  let fixture: ComponentFixture<ViewlophocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewlophocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewlophocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
