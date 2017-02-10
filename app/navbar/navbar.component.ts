import { Component } from '@angular/core';

import { AuthService } from '../core/service/auth.service';

import { User } from '../core/model/user';

@Component({
    moduleId: module.id,
    selector: 'navbar',
    templateUrl: 'navbar.component.html',
    styleUrls: ['navbar.component.css']
})
export class NavbarComponent{

    private _email = "you@gmail.com";
    private _password = "dubie1977";


    constructor(private authService: AuthService){}

    test(){
        console.log("test called")
        this.authService.createLogin(this._email, this._password).then(authData => {
            console.log("user created");
        });
    }

    signIn(){
        console.log("signIn called")
        this.authService.signInUser(this._email, this._password).then(authData => {
            console.log(authData);
            console.log("Email: "+this.authService.getUserEmail());
        });
        
    }

    signOut(){
        console.log("signOut called")
        this.authService.signOutUser().then(authData => {
            //console.log(authData);
            console.log("Email: "+this.authService.getUserEmail());
        });
        
    }
}