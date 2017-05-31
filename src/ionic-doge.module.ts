import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from 'ionic-angular';
import { SignaturePadModule } from 'angular2-signaturepad';

import { IonDogeInput } from './components/forms/input/input.component';
import { SignatureField } from './components/forms/signature-field/signature-field.component';

@NgModule({
  declarations: [
    SignatureField,
    IonDogeInput
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    SignaturePadModule
  ],
  exports: [
    SignatureField,
    IonDogeInput
  ]
})
export class IonicDogeModule { }
