import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { AuthService } from '../../core/service/auth.service';

@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrls: [ 'login.component.css']
})
export class LoginComponent implements OnInit{

    private loginForm: FormGroup;
    private _emailAddress: string;
    private _password: string;

    constructor(private formB: FormBuilder){}

    ngOnInit(){
        this.configureForm();
    }

    configureForm(){
        this.loginForm = this.formB.group({
            emailAddress: [this._emailAddress, [Validators.required]]
        });
    }
}