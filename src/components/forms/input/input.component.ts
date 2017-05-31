import { Component, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'ion-doge-input',
    templateUrl: 'input.component.html',
})
export class IonDogeInput implements AfterViewInit {

    @ViewChild('helperText') helperText: ElementRef;

    @Input() linkedFormControl: FormControl;
    @Input() label: string;
    @Input() required: boolean;
    @Input() minLength: number;
    @Input() maxLength: number;

    formGroup: FormGroup;
    controlName: string;
    hasHelperText: boolean;

    ngAfterViewInit() {
        this.initFormGroup();
        this.initValidations();
    }

    private initFormGroup(): void {
        console.log(this.linkedFormControl);
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
        this.hasHelperText = this.helperText.nativeElement.children.length > 0;
        let validators: any[] = [this.linkedFormControl.validator];

        if (this.required) {
            validators.push(Validators.required);
        }

        if (this.minLength) {
            validators.push(Validators.minLength(this.minLength));
        }

        if (this.maxLength) {
            validators.push(Validators.maxLength(this.maxLength));
        }

        this.linkedFormControl.setValidators(Validators.compose(validators));
    }

}
