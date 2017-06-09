import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KqBrandCreateEditComponent } from './kq-brand-create-edit.component';

describe('KqBrandCreateEditComponent', () => {
  let component: KqBrandCreateEditComponent;
  let fixture: ComponentFixture<KqBrandCreateEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KqBrandCreateEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KqBrandCreateEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
