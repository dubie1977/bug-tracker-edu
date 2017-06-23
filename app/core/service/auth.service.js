"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Observable_1 = require('rxjs/Observable');
var Rx_1 = require('rxjs/Rx');
var constants_1 = require('../constant/constants');
//import { FirebaseConfigService } from '../../core/service/firebase-config.service';
var firebase = require('firebase');
require('firebase/auth');
var AuthService = (function () {
    function AuthService() {
        this._user = new Rx_1.BehaviorSubject(this._currentUser);
        this.configureApp();
    }
    AuthService.prototype.getUser = function () {
        return this._user;
    };
    AuthService.prototype.configureApp = function () {
        firebase.initializeApp(constants_1.FIREBASE_CONFIG);
    };
    AuthService.prototype.getUserEmail = function () {
        var _this = this;
        return Observable_1.Observable.create(function (obs) {
            var email;
            if (_this._currentUser != null) {
                email = _this._currentUser.email;
                console.log("email");
            }
            obs.next(email);
        });
    };
    AuthService.prototype.createLogin = function (user, password) {
        console.log("in createLogin"); //TODO Remove
        try {
            var data = firebase.auth().createUserWithEmailAndPassword(user, password);
            console.log(data); //TODO - Remove
            return data;
        }
        catch (e) {
            console.log(e); //TODO - Remove
        }
    };
    AuthService.prototype.signInUser = function (user, password) {
        var _this = this;
        console.log(" sign in "); //TODO - Remove
        return Observable_1.Observable.create(function (obs) {
            try {
                firebase.auth().signInWithEmailAndPassword(user, password).then(function (data) {
                    var data2 = firebase.auth().currentUser;
                    if (data2 != null) {
                        console.log("user: " + data2.email); //TODO - Remove
                        console.log("data: " + data); //TODO - Remove
                        _this._user.next(data2);
                        obs.complete();
                    }
                    //return data2;
                }).catch(function (err) {
                    console.log(err); //TODO - Remove
                });
            }
            catch (e) {
                console.log(e); //TODO - Remove
            }
        });
    };
    AuthService.prototype.signOutUser = function () {
        try {
            console.log("in signOutUser"); //TODO Remove
            var data = firebase.auth().signOut().then(function (data) {
                var data2 = firebase.auth().currentUser;
                console.log("data: " + data); //TODO - Remove
                if (data2 != null) {
                    console.log("data2: " + data2.email); //TODO - Remove
                }
                return data;
            }).catch(function (err) {
                console.log(err); //TODO - Remove
            });
        }
        catch (e) {
            console.log(e); //TODO - Remove
        }
    };
    AuthService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map