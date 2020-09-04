import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TinhTongComponent } from './tinh-tong.component';

describe('TinhTongComponent', () => {
  let component: TinhTongComponent;
  let fixture: ComponentFixture<TinhTongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TinhTongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TinhTongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
