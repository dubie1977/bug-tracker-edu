import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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

    ngOnInit(){
        this.configureForm();
    }

    configureForm(){
        this.bugForm = new FormGroup({
            // /puppy/i creates a regExp for string puppy anywhere ignoring case.
            title: new FormControl(null, [Validators.required, forbiddenStringValidator(/puppy/i) ] ),
            status: new FormControl(1, Validators.required),
            severity: new FormControl(1, Validators.required),
            description: new FormControl(null, Validators.required)
        });
    }

    submitForm(){
        console.log(this.bugForm);
    }

}