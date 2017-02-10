import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { User } from '../model/user';

import * as firebase from 'firebase';
require('firebase/auth')

@Injectable()
export class AuthService{

    private _currentUser: User;

    constructor(){ }

    public getUser(): User{
        return this._currentUser;
    }

    public getUserEmail(): string{
        return firebase.auth().currentUser.email;
    }

    createLogin(user: string, password: string): any{
        console.log("in createLogin") //TODO Remove

        let data = firebase.auth().createUserWithEmailAndPassword(user, password).catch(err => {
            console.log(err); 
        });
        console.log(data);
        return data;
 
    }

    signInUser(user: string, password: string): any{

        let data = firebase.auth().signInWithEmailAndPassword(user, password).catch(err => {
            console.log(err); 
        });
        let data2 = firebase.auth().currentUser
        console.log("data: "+data);
        console.log("data2: "+data2.email);
        return data;

    }

    signOutUser(): any {
        console.log("in signOutUser") //TODO Remove

        let data = firebase.auth().signOut().catch(err => {
            console.log(err); 
        });
        let data2 = firebase.auth().currentUser
        console.log("data: "+data);
        console.log("data2: "+data2.email);
        return data;
        
    }


}