import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GdeListComponent } from './gde-list.component';

describe('GdeListComponent', () => {
  let component: GdeListComponent;
  let fixture: ComponentFixture<GdeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GdeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GdeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
