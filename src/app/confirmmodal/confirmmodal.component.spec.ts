import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmmodalComponent } from './confirmmodal.component';

describe('ConfirmmodalComponent', () => {
  let component: ConfirmmodalComponent;
  let fixture: ComponentFixture<ConfirmmodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmmodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
