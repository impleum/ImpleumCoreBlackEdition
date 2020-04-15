import { Component } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'signature',
  templateUrl: './signature.component.html',
  styleUrls: ['./signature.component.css'],
})
export class SignatureComponent {
  constructor(public activeModal: NgbActiveModal) { }

  public copied: boolean = false;

  public onCopiedClick() {
    this.copied = true;
  }

  public content: string = "";
  public address: string = "";
  public message: string = "";
}
