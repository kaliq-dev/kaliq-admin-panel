import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KqLoginComponent } from './kq-login.component';

describe('KqLoginComponent', () => {
  let component: KqLoginComponent;
  let fixture: ComponentFixture<KqLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KqLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KqLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
