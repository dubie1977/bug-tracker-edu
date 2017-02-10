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
var firebase = require('firebase');
require('firebase/auth');
var AuthService = (function () {
    function AuthService() {
    }
    AuthService.prototype.getUser = function () {
        return this._currentUser;
    };
    AuthService.prototype.getUserEmail = function () {
        return firebase.auth().currentUser.email;
    };
    AuthService.prototype.createLogin = function (user, password) {
        console.log("in createLogin"); //TODO Remove
        var data = firebase.auth().createUserWithEmailAndPassword(user, password).catch(function (err) {
            console.log(err);
        });
        console.log(data);
        return data;
    };
    AuthService.prototype.signInUser = function (user, password) {
        var data = firebase.auth().signInWithEmailAndPassword(user, password).catch(function (err) {
            console.log(err);
        });
        var data2 = firebase.auth().currentUser;
        console.log("data: " + data);
        console.log("data2: " + data2.email);
        return data;
    };
    AuthService.prototype.signOutUser = function () {
        console.log("in signOutUser"); //TODO Remove
        var data = firebase.auth().signOut().catch(function (err) {
            console.log(err);
        });
        var data2 = firebase.auth().currentUser;
        console.log("data: " + data);
        console.log("data2: " + data2.email);
        return data;
    };
    AuthService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map