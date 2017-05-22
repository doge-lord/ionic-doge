import { Component, Input, ViewChild, ElementRef, AfterViewInit, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';

@Component({
    selector: 'ion-doge-signature',
    templateUrl: 'signature-field.component.html',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => SignatureField),
            multi: true,
        },
    ],
})
export class SignatureField implements AfterViewInit, ControlValueAccessor {

    @ViewChild(SignaturePad) signaturePad: SignaturePad;
    @ViewChild('signatureFieldContainer') signatureFieldContainer: ElementRef;
    @Input() readonly: boolean;
    @Input() label: string;

    private _signature: string = null;
    private _maxHeight: number;
    hasFocus: boolean = false;
    propagateChange: Function = () => { };
    propagateTouch: Function = () => { };

    options: Object = {
        penColor: 'rgb(0, 0, 0)',
        backgroundColor: 'rgb(255, 255, 255)'
    };

    get signature(): string {
        return this._signature;
    }

    set signature(value: string) {
        this._signature = value;
        this.propagateChange(this.signature);
    }

    ngAfterViewInit() {
        this._maxHeight = this.signatureFieldContainer.nativeElement.clientHeight;
        this.beResponsive();
    }

    writeValue(value: any) {
        if (!value) {
            return;
        }
        this._signature = value;

        if (this.signaturePad) {
            this.signaturePad.fromDataURL(this.signature);
        }
    }

    registerOnChange(fn: any): void {
        this.propagateChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.propagateTouch = fn;
    }

    beResponsive() {
        if (this.signaturePad) {
            this.signaturePad.set('canvasWidth', this.signatureFieldContainer.nativeElement.clientWidth);
            this.signaturePad.set('canvasHeight', this._maxHeight);
            this.signaturePad.clear();
        }
    }

    drawBegin(): void {
        this.hasFocus = true;
        this.propagateTouch();
    }

    drawComplete(): void {
        this.hasFocus = false;
        if (this.signaturePad) {
            this._signature = this.signaturePad.toDataURL('image/png', 1);
            this.propagateChange(this.signature);
        }
    }

    clear(): void {
        if (this.signaturePad) {
            this.signaturePad.clear();
            this.signature = '';
            this.propagateChange(this.signature);
        }
    }
}
