import { Component, OnInit, ViewChild} from '@angular/core';
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
    private _user: User;

    @ViewChild(NavbarComponent)
    private navbar = new NavbarComponent(this.authService);

    constructor(private formB: FormBuilder, private authService: AuthService){}

    ngOnInit(){
        this.configureForm();
    }

    getUserEmail(): string{
        if(this._user == null){
            return "Not Logged In"
        } else{
            return this._user.email;
        }
    }

    configureForm(){
        this.loginForm = this.formB.group({
            emailAddress: [this._emailAddress, [Validators.required]],
            password: [this._password, [Validators.required]]
        });
    }

    logout(){
        try{
            this.authService.signOutUser().then(authData => {
                this._user = null;
            });
            
        } catch(e) {
            //console.log(e);
        }
    }

    login(){
        console.log("signIn called")
       let email = this.loginForm.value["emailAddress"];
       let password = this.loginForm.value["password"];
       let user: User;
       try{
           this.authService.signInUser(email, password).subscribe(authData => {
                console.log("logged in");
                this._user = new User("uid", email, null, null, null, null);
                //return true;
            })
       } catch(e){
            //console.log("Error: "+e);
       } finally{
           if(user == null){

           }
       }

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