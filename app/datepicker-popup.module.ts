import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdDatepickerPopup } from './datepicker-popup';

import { registerLocaleData } from "@angular/common";
import localeDe from "@angular/common/locales/hr";
import localeDeExtra from "@angular/common/locales/extra/hr";

registerLocaleData(localeDe, "hr", localeDeExtra);

@NgModule({
  imports: [BrowserModule, FormsModule, NgbModule],
  declarations: [NgbdDatepickerPopup],
  exports: [NgbdDatepickerPopup],
  bootstrap: [NgbdDatepickerPopup],
  providers: [{ provide: LOCALE_ID, useValue: "hr-HR"}]
})
export class NgbdDatepickerPopupModule {}
