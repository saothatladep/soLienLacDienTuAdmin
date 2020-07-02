import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdiemComponent } from './viewdiem.component';

describe('ViewdiemComponent', () => {
  let component: ViewdiemComponent;
  let fixture: ComponentFixture<ViewdiemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewdiemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewdiemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
