import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { AuthService } from '../../core/service/auth.service';

import { NavbarComponent } from '../../navbar/navbar.component';

import { User } from '../../core/model/user';

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

    constructor(private formB: FormBuilder, private authService: AuthService, private navbar : NavbarComponent){}

    ngOnInit(){
        this.configureForm();
    }

    configureForm(){
        this.loginForm = this.formB.group({
            emailAddress: [this._emailAddress, [Validators.required]],
            password: [this._password, [Validators.required]]
        });
    }

    login(){
        console.log("signIn called")
       var email = this.loginForm.value["emailAddress"];
       var password = this.loginForm.value["password"];
        this.authService.signInUser(email, password).then(authData => {
            console.log("logged in");
            this.navbar.setUser(new User("uid", email, null, null, null, null));
        }).catch(err => {
            console.log("Error: "+err);
            this.navbar.setUser(null);
        }); 
    }

    createAccount(){
        var email = this.loginForm.value["emailAddress"];
        var password = this.loginForm.value["password"];
        this.authService.createLogin(email, password).then(authData => {
            console.log("logged in");
        }).catch(err => {
            console.log("Error: "+err);
        }); 
    }
}