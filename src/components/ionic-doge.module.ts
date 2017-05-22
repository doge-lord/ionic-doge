import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SignaturePadModule } from 'angular2-signaturepad';

import { SignatureField } from './forms/signature-field/signature-field.component';

@NgModule({
  declarations: [
    SignatureField
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SignaturePadModule
  ],
  exports: [
    SignatureField
  ]
})
export class IonicDogeModule { }
