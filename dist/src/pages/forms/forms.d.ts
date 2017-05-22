import { FormBuilder, FormGroup } from '@angular/forms';
export declare class FormsPage {
    private formBuilder;
    form: FormGroup;
    sampleImage: string;
    constructor(formBuilder: FormBuilder);
    submit(form: FormGroup): void;
}
