import { Component, Input, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'ion-doge-helper-text',
    templateUrl: 'helper-text.component.html',
})
export class HelperText implements AfterViewInit {

    @Input() linkedFormControl: FormControl;

    controlName: string;

    ngAfterViewInit() {
        this.controlName = this.getControlName(this.linkedFormControl);
    }

    private getControlName(formControl: FormControl): string {
        let controlName: string;

        if (formControl.parent instanceof FormGroup) {
            let parent: FormGroup = formControl.parent;

            Object.keys(parent.controls).forEach((name) => {
                if (formControl === parent.controls[name]) {
                    controlName = name;
                }
            });
        }

        return controlName;
    }

}
