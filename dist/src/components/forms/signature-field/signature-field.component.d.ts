import { ElementRef, AfterViewInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
export declare class SignatureField implements AfterViewInit, ControlValueAccessor {
    signaturePad: SignaturePad;
    signatureFieldContainer: ElementRef;
    readonly: boolean;
    label: string;
    private _signature;
    private _maxHeight;
    hasFocus: boolean;
    propagateChange: Function;
    propagateTouch: Function;
    options: Object;
    signature: string;
    ngAfterViewInit(): void;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    beResponsive(): void;
    drawBegin(): void;
    drawComplete(): void;
    clear(): void;
}
