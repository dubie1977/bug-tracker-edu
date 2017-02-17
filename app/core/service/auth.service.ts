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
            console.log(data);//TODO - Remove
            return data;
        } catch(e){
            console.log(e);//TODO - Remove
        }
    }

    signInUser(user: string, password: string): any{

        console.log(" sign in ");//TODO - Remove
        try{
            firebase.auth().signInWithEmailAndPassword(user, password).then(data => {
                let data2 = firebase.auth().currentUser;
                if(data2 != null){
                    console.log("user: "+data2.email);//TODO - Remove
                    console.log("data: "+data);//TODO - Remove
                }
                return data2;
            }).catch(err => {
                console.log(err);//TODO - Remove
            })
            
        } catch(e){
            console.log(e);//TODO - Remove
        }

    }

    signOutUser(): any {

        try{
            console.log("in signOutUser") //TODO Remove

            let data = firebase.auth().signOut().then(data => {
                let data2 = firebase.auth().currentUser;
                console.log("data: "+data);//TODO - Remove
                if(data2 != null){
                    console.log("data2: "+data2.email);//TODO - Remove
                }
                
                return data;
            }).catch(err => {
                console.log(err); //TODO - Remove
            });
            
        }catch(e){
            console.log(e);//TODO - Remove
        }
        
    }


}