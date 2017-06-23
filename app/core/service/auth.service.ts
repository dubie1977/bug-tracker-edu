import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/Rx';

import { User } from '../model/user';

import { FIREBASE_CONFIG } from '../constant/constants';

//import { FirebaseConfigService } from '../../core/service/firebase-config.service';

import * as firebase from 'firebase';
require('firebase/auth')

@Injectable()
export class AuthService{

    private _currentUser: User;
    private _user: BehaviorSubject<User> = new BehaviorSubject(this._currentUser);

    constructor(){ 
        this.configureApp();
    }

    public getUser(): Observable<User>{
        return this._user;
    }

    configureApp(){
        firebase.initializeApp(FIREBASE_CONFIG);
    }

    getUserEmail(): Observable<any> {
        return Observable.create(obs => {
            let email: string;
            if(this._currentUser != null){
                email = this._currentUser.email;
                console.log("email");
            }
            obs.next(email);
        });

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

    signInUser(user: string, password: string): Observable<any>{

        console.log(" sign in ");//TODO - Remove
        return Observable.create(obs => {

            try{
                firebase.auth().signInWithEmailAndPassword(user, password).then(data => {
                    let data2 = firebase.auth().currentUser;
                    if(data2 != null){
                        console.log("user: "+data2.email);//TODO - Remove
                        console.log("data: "+data);//TODO - Remove
                        this._user.next(data2);
                        obs.complete();
                    }
                    //return data2;
                }).catch(err => {
                    console.log(err);//TODO - Remove
                })
                
            } catch(e){
                console.log(e);//TODO - Remove
            }
        });
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