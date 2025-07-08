import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginStatusComponent } from './login-status.component';

describe('LoginStatusComponent', () => {
  let component: LoginStatusComponent;
  let fixture: ComponentFixture<LoginStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginStatusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
