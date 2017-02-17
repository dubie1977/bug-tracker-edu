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
    private _signedIn = false;
    private _password = "dubie1977";
    private user: User;
    private email = "Not Signed";


    constructor(private authService: AuthService){}

    test(){
        console.log("test called")
        this.authService.createLogin(this._email, this._password).then(authData => {
            console.log("user created");
        });
    }

    public setUser(user: User){
        this.user = user;
        if (this.user != null){
            this._signedIn = true;
            this.email = user.email;
            console.log("user set: "+user.email);
        } else{
            this._signedIn = false;
            this.email = "Not Signed";
        }
    }

    getEmailAddress(): string{
        
        if(this._signedIn){
            this._email = firebase.auth().currentUser.email;
        } else {
            this._email = "Not Signed In";
        }



        return this._email;
    }

    isSignedIn(): boolean{
        return this._signedIn;
    }

    signIn(){
        console.log("signIn called")
         
    }

    signOut(){
        console.log("signOut called")
        if (this.isSignedIn()){
            try{
                this.authService.signOutUser().then(authData => {
                    console.log("Signend Out ");
                    this._signedIn = false;
                });
            } catch(e){
                console.log("LogOut error: "+e);
            }
            
        }
        
    }
}