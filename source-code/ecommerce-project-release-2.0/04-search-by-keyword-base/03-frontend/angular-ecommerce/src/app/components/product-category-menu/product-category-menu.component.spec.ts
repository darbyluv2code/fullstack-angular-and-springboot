import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCategoryMenuComponent } from './product-category-menu.component';

describe('ProductCategoryMenuComponent', () => {
  let component: ProductCategoryMenuComponent;
  let fixture: ComponentFixture<ProductCategoryMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductCategoryMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCategoryMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
