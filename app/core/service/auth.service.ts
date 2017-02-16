import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { User } from '../model/user';

import { FIREBASE_CONFIG } from '../constant/constants';

//import { FirebaseConfigService } from '../../core/service/firebase-config.service';

import * as firebase from 'firebase';
require('firebase/auth')

@Injectable()
export class AuthService{

    private _currentUser: User;

    constructor(){ 
        this.configureApp();
    }

    public getUser(): User{
        return this._currentUser;
    }

    configureApp(){
        firebase.initializeApp(FIREBASE_CONFIG);
    }

    public getUserEmail(): string{
        return firebase.auth().currentUser.email;
    }

    createLogin(user: string, password: string): any{
        console.log("in createLogin"); //TODO Remove

        try {
            let data = firebase.auth().createUserWithEmailAndPassword(user, password);
            console.log(data);
            return data;
        } catch(e){
            console.log(e);
        }
    }

    signInUser(user: string, password: string): any{

        console.log(" sign in ");
        try{
            let data = firebase.auth().signInWithEmailAndPassword(user, password);
            let data2 = firebase.auth().currentUser;
            console.log("data: "+firebase.auth().currentUser.email);
            return data;
        } catch(e){
            console.log(e);
        }

    }

    signOutUser(): any {

        try{
            console.log("in signOutUser") //TODO Remove

            let data = firebase.auth().signOut().catch(err => {
                console.log(err); 
            });
            let data2 = firebase.auth().currentUser;
            console.log("data: "+data);
            console.log("data2: "+data2.email);
            return data;
        }catch(e){
            console.log(e);
        }
        
    }


}