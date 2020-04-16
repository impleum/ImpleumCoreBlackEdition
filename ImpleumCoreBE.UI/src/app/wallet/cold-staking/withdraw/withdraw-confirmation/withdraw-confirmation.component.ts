import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-withdraw-confirmation',
  templateUrl: './withdraw-confirmation.component.html',
  styleUrls: ['./withdraw-confirmation.component.css']
})
export class ColdStakingWithdrawConfirmationComponent{
  constructor(private activeModal: NgbActiveModal) { }

  okClicked() {
    this.activeModal.close();
  }
}
