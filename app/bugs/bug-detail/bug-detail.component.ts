import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { forbiddenStringValidator } from '../../shared/validation/forbidden-string.validator';

@Component({
    moduleId: module.id,
    selector: 'bug-detail',
    templateUrl: 'bug-detail.component.html',
    styleUrls: [ 'bug-detail.component.css']
})
export class BugDetailComponent implements OnInit {
    private modalId = "bugModal";
    private bugForm: FormGroup;

    //Required for FormBuilder
    constructor(private formB: FormBuilder){}

    ngOnInit(){
        this.configureForm();
    }

    configureForm(){

        //Default Reactive forms
        /*this.bugForm = new FormGroup({
            // /puppy/i creates a regExp for string puppy anywhere ignoring case.
            title: new FormControl(null, [Validators.required, forbiddenStringValidator(/puppy/i) ] ),
            status: new FormControl(1, Validators.required),
            severity: new FormControl(1, Validators.required),
            description: new FormControl(null, Validators.required)
        });*/

        //FormBuilder Reactive froms
        this.bugForm = this.formB.group({
            title: [null, [Validators.required, forbiddenStringValidator(/puppy/i)]],
            status: [1, Validators.required],
            severity: [1, Validators.required],
            description: [null, Validators.required]
        });
    }

    submitForm(){
        console.log(this.bugForm);
    }

}