import { Component, Input, ViewChild, ElementRef, DoCheck, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'ion-doge-input',
    templateUrl: 'input.component.html',
})
export class IonDogeInput implements DoCheck, AfterViewInit {

    @ViewChild('helperText') helperText: ElementRef;

    @Input() linkedFormControl: FormControl;
    @Input() label: string;
    @Input() required: boolean;
    @Input() minLength: number;
    @Input() maxLength: number;

    formGroup: FormGroup;
    controlName: string;
    hasHelperText: boolean;

    ngDoCheck() {
        this.initValidations();
    }

    ngAfterViewInit() {
        this.initFormGroup();
    }

    private initFormGroup(): void {
        if (this.linkedFormControl.parent instanceof FormGroup) {
            this.formGroup = this.linkedFormControl.parent;
            Object.keys(this.formGroup.controls).forEach((name) => {
                if (this.linkedFormControl === this.formGroup.controls[name]) {
                    this.controlName = name;
                }
            });
        }
    }

    private initValidations() {
        let validators: any[] = [];
        this.hasHelperText = this.helperText.nativeElement.children.length > 0;

        if (this.linkedFormControl.validator) {
            validators.push(this.linkedFormControl.validator);
        }

        if (this.required) {
            validators.push(Validators.required);
        }

        if (this.minLength) {
            validators.push(Validators.minLength(this.minLength));
        }

        if (this.maxLength) {
            validators.push(Validators.maxLength(this.maxLength));
        }

        setTimeout(_ => this.linkedFormControl.setValidators(Validators.compose(validators)));
    }

    displayCharacterCounter(): boolean{
        let characterLength = this.linkedFormControl.value.length;

        if (this.maxLength) {
            return characterLength > this.maxLength * .75;
        }

        return false;
    }

}
