import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KqProductCreateComponent } from './kq-product-create.component';

describe('KqProductCreateComponent', () => {
  let component: KqProductCreateComponent;
  let fixture: ComponentFixture<KqProductCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KqProductCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KqProductCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
