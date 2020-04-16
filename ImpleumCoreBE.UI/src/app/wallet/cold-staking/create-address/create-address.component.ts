import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ClipboardService } from 'ngx-clipboard';

import { ColdStakingService } from '../../../shared/services/coldstaking.service';
import { GlobalService } from '../../../shared/services/global.service';

@Component({
    selector: 'app-create-address',
    templateUrl: './create-address.component.html',
    styleUrls: ['./create-address.component.css']
})
export class ColdStakingCreateAddressComponent implements OnInit {

    constructor(private globalService: GlobalService, private stakingService: ColdStakingService, private activeModal: NgbActiveModal, private clipboardService: ClipboardService) { }

    address = '';
    addressCopied = false;

    public isColdStaking: boolean;

    ngOnInit() {
        this.stakingService.getAddress(this.globalService.getWalletName(), this.isColdStaking).subscribe(x => this.address = x.address);
    }

    closeClicked() {
        this.activeModal.close();
    }

    copyClicked() {
        if (this.address) {
            this.addressCopied = this.clipboardService.copyFromContent(this.address);
        }
    }
}
