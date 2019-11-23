import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesPersonListComponent } from './sales-person-list.component';

describe('SalesPersonListComponent', () => {
  let component: SalesPersonListComponent;
  let fixture: ComponentFixture<SalesPersonListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesPersonListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesPersonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
