import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TxbitComponent } from './txbit.component';

describe('ReceiveComponent', () => {
  let component: TxbitComponent;
  let fixture: ComponentFixture<TxbitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TxbitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TxbitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
