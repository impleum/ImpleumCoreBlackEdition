import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { WalletRoutingModule } from './wallet-routing.module';
import { SmartContractsModule } from './smart-contracts/smart-contracts.module';

import { WalletComponent } from './wallet.component';
import { MenuComponent } from './menu/menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HistoryComponent } from './history/history.component';
import { StatusBarComponent } from './status-bar/status-bar.component';
import { AdvancedComponent } from './advanced/advanced.component';
import { AddressBookComponent } from './address-book/address-book.component';
import { AddNewAddressComponent } from './address-book/modals/add-new-address/add-new-address.component';
import { ExtPubkeyComponent } from './advanced/components/ext-pubkey/ext-pubkey.component';
import { AboutComponent } from './advanced/components/about/about.component';
import { GenerateAddressesComponent } from './advanced/components/generate-addresses/generate-addresses.component';
import { ResyncComponent } from './advanced/components/resync/resync.component';
import { SendComponent } from './send/send.component';
import { ReceiveComponent } from './receive/receive.component';
import { ColdStakingOverviewComponent } from './cold-staking/overview.component';
import { ColdStakingCreateComponent } from './cold-staking/create/create.component';
import { ColdStakingCreateSuccessComponent } from "./cold-staking/create-success/create-success.component";
import { ColdStakingCreateAddressComponent } from "./cold-staking/create-address/create-address.component";
import { ColdStakingWithdrawComponent } from "./cold-staking/withdraw/withdraw.component";
import { ColdStakingWithdrawConfirmationComponent } from "./cold-staking/withdraw/withdraw-confirmation/withdraw-confirmation.component";
import { ColdStakingCreateHotComponent } from './cold-staking/create-hot/create-hot.component';
import { SplitComponent } from './split/split.component';
import { SendConfirmationComponent } from './send/send-confirmation/send-confirmation.component';
import { TransactionDetailsComponent } from './transaction-details/transaction-details.component';
import { LogoutConfirmationComponent } from './logout-confirmation/logout-confirmation.component';
import { MessageSignatureComponent } from './message-signature/message-signature.component';
import { SignatureComponent } from './message-signature/signature/signature.component';
import { VerifyComponent } from './message-signature/verify/verify.component';
import { TxbitComponent } from './txbit/txbit.component';
import { BsDatepickerModule } from 'ngx-bootstrap';


@NgModule({
  imports: [
    SharedModule,
    WalletRoutingModule,
    SmartContractsModule,
    BsDatepickerModule.forRoot()
  ],
  declarations: [
    WalletComponent,
    MenuComponent,
    DashboardComponent,
    SendComponent,
    ReceiveComponent,
    SplitComponent,
    SendConfirmationComponent,
    TransactionDetailsComponent,
    LogoutConfirmationComponent,
    HistoryComponent,
    StatusBarComponent,
    AdvancedComponent,
    AddressBookComponent,
    AddNewAddressComponent,
    ExtPubkeyComponent,
    AboutComponent,
    GenerateAddressesComponent,
    ResyncComponent,
    MessageSignatureComponent,
    SignatureComponent,
    VerifyComponent,
    TxbitComponent,
    ColdStakingOverviewComponent,
    ColdStakingCreateComponent,
    ColdStakingCreateSuccessComponent,
    ColdStakingCreateAddressComponent,
    ColdStakingWithdrawComponent,
    ColdStakingWithdrawConfirmationComponent,
    ColdStakingCreateHotComponent
  ],
  entryComponents: [
    SendComponent,
    SendConfirmationComponent,
    ReceiveComponent,
    SplitComponent,
    TransactionDetailsComponent,
    LogoutConfirmationComponent,
    SignatureComponent,
    VerifyComponent,
    ColdStakingCreateComponent,
    ColdStakingCreateSuccessComponent,
    ColdStakingCreateAddressComponent,
    ColdStakingWithdrawComponent,
    ColdStakingWithdrawConfirmationComponent,
    ColdStakingCreateHotComponent
  ]
})

export class WalletModule { }
