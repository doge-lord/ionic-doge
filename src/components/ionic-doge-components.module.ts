import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SignaturePadModule } from 'angular2-signaturepad';

import { HelperText } from './forms/helper-text/helper-text.component';
import { SignatureField } from './forms/signature-field/signature-field.component';

@NgModule({
  declarations: [
    HelperText,
    SignatureField
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SignaturePadModule
  ],
  exports: [
    HelperText,
    SignatureField
  ]
})
export class IonicDogeComponentsModule { }
