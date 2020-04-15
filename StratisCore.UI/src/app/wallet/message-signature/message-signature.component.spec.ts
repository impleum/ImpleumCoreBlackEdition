import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageSignatureComponent } from './message-signature.component';

describe('MessageSignatureComponent', () => {
  let component: MessageSignatureComponent;
  let fixture: ComponentFixture<MessageSignatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageSignatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageSignatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
