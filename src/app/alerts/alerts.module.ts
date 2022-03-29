import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WarningAlertComponent} from './warning-alert/warning-alert.component';
import {SuccessAlertComponent} from './success-alert/success-alert.component';

/* import { warningAlert } from './warning-alert./warning-alert.component';
*/

@NgModule({
  declarations: [
    WarningAlertComponent,
    SuccessAlertComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    WarningAlertComponent,
    SuccessAlertComponent
  ]
})
export class AlertsModule { }
