import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KqBrandListComponent } from './kq-brand-list.component';

describe('KqBrandListComponent', () => {
  let component: KqBrandListComponent;
  let fixture: ComponentFixture<KqBrandListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KqBrandListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KqBrandListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
