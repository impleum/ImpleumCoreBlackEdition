import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

import { ApiService } from '../../shared/services/api.service';
import { GlobalService } from '../../shared/services/global.service';
import { ModalService } from '../../shared/services/modal.service';
import { WalletInfo } from '../../shared/models/wallet-info';
import { SignMessageRequest } from '../../shared/models/wallet-signmessagerequest';
import { VerifyRequest } from '../../shared/models/wallet-verifyrequest';
import { SignatureComponent } from './signature/signature.component';
import { VerifyComponent } from './verify/verify.component';

import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'message-signature',
  templateUrl: './message-signature.component.html',
  styleUrls: ['./message-signature.component.css'],
})

export class MessageSignatureComponent {
  constructor(
    private apiService: ApiService,
    private globalService: GlobalService,
    private modalService: NgbModal,
    private genericModalService: ModalService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.buildSignatureForm();
    this.buildVerificationForm();
  }

  public signatureForm: FormGroup;
  public verifyForm: FormGroup;
  public allAddresses: any;
  public showUnusedAddresses: boolean = false;
  
  public getAllAddresses() {
    this.getAddresses();
  }

  public onShowUnusedAddressedChanged(checkbox) {
    this.showUnusedAddresses = checkbox.checked;
    this.getAddresses();
  }

  public onSignButtonClick(button) {
    button.disabled = true;
    this.signMessage(button);
  }

  public onVerifyButtonClick(button) {
    button.disabled = true;
    this.verifyMessage(button);
  }

  public openSignatureDialog(signature: string) {
    const modalRef = this.modalService.open(SignatureComponent, { backdrop: "static", keyboard: false });
    modalRef.componentInstance.content = signature;

    const message = this.signatureForm.get("message").value;
    const address = this.signatureForm.get("address").value;

    modalRef.componentInstance.message = message;
    modalRef.componentInstance.address = address;
  };

  public openVerifyDialog(isvalid: boolean) {
    const modalRef = this.modalService.open(VerifyComponent, { backdrop: "static", keyboard: false });
    modalRef.componentInstance.isvalid = isvalid;
  };

  ngOnInit() {
    this.getAddresses();
  }

  ngOnDestroy() {
   
  }

  private signMessage(button) {
    const walletName = this.globalService.getWalletName();
    const message = this.signatureForm.get("message").value;
    const address = this.signatureForm.get("address").value;
    const password = this.signatureForm.get("password").value;
    const accountName = "account 0";

    const signMessageRequest = new SignMessageRequest(walletName, accountName, password, address, message);

    this.apiService.signMessage(signMessageRequest)
      .subscribe(
        response => {
          button.disabled = false;
          this.openSignatureDialog(response);
        }
      );
  }

  private verifyMessage(button) {
    const message = this.verifyForm.get("message").value;
    const address = this.verifyForm.get("address").value;
    const signature = this.verifyForm.get("signature").value;

    const verifyRequest = new VerifyRequest(signature, address, message);

    this.apiService.verifyMessage(verifyRequest)
      .subscribe(
        response => {
          button.disabled = false;
          this.openVerifyDialog(response.toLowerCase() === "true");
        }
      );
  }

  private getAddresses() {
    const walletInfo = new WalletInfo(this.globalService.getWalletName());
    this.apiService.getAllAddresses(walletInfo)
      .subscribe(
        response => {
          this.allAddresses = [];

          for (let address of response.addresses) {
            if (((!address.isUsed && this.showUnusedAddresses) || address.isUsed) && (!address.isChange)) {
              this.allAddresses.push(address);
            }
          }
        }
      );
  }

  private buildSignatureForm(): void {
    this.signatureForm = this.fb.group({
      "message": ["", Validators.required],
      "address": ["", Validators.required],
      "password": ["", Validators.required]
    });

    this.signatureForm.valueChanges.pipe(debounceTime(300))
      .subscribe(data => this.onSignatureFormValueChanged(data));
  }

  private buildVerificationForm(): void {
    this.verifyForm = this.fb.group({
      "message": ["", Validators.required],
      "address": ["", Validators.required],
      "signature": ["", Validators.required]
    });

    this.verifyForm.valueChanges.pipe(debounceTime(300))
      .subscribe(data => this.onVerifyFormValueChanged(data));
  }

  onSignatureFormValueChanged(data?: any) {
    if (!this.signatureForm) { return; }
    const form = this.signatureForm;
    for (const field in this.signatureFormErrors) {
      this.signatureFormErrors[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.signatureValidationMessages[field];
        for (const key in control.errors) {
          this.signatureFormErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  onVerifyFormValueChanged(data?: any) {
    if (!this.verifyForm) { return; }
    const form = this.verifyForm;
    for (const field in this.verifyFormErrors) {
      this.verifyFormErrors[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.verifyValidationMessages[field];
        for (const key in control.errors) {
          this.verifyFormErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  signatureFormErrors = {
    "message": "",
    "address": "",
    "password": ""
  };

  verifyFormErrors = {
    "message": "",
    "address": "",
    "signature": ""
  };

  signatureValidationMessages = {
    "message": {
      "required": "An message is required."
    },
    "address": {
      "required": "An address is required."
    },
    "password": {
      "required": "Your password is required."
    }
  };

  verifyValidationMessages = {
    "message": {
      "required": "An message is required."
    },
    "address": {
      "required": "An address is required."
    },
    "signature": {
      "required": "A signature is required."
    }
  };
}
