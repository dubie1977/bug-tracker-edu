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
var auth_service_1 = require('../core/service/auth.service');
var NavbarComponent = (function () {
    function NavbarComponent(authService) {
        this.authService = authService;
        this._email = "you@gmail.com";
        this._signedIn = false;
        this._password = "dubie1977";
        this.email = "Not Signed";
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.getUser();
    };
    NavbarComponent.prototype.test = function () {
        console.log("test called");
        this.authService.createLogin(this._email, this._password).then(function (authData) {
            console.log("user created");
        });
    };
    NavbarComponent.prototype.getUser = function () {
        var _this = this;
        this.authService.getUser().subscribe(function (user) {
            if (user != null) {
                _this.user = user;
                _this._email = user.email;
                _this._signedIn = true;
            }
            else {
                _this._signedIn = false;
                _this.user = null;
                _this._email = "Not logged in";
            }
        });
    };
    /*    public setUser(user: User){
            this.user = user;
            if (this.user != null){
                this._signedIn = true;
                this.email = user.email;
                console.log("user set: "+user.email);
            } else{
                this._signedIn = false;
                this.email = "Not Signed";
            }
        }*/
    NavbarComponent.prototype.getEmailAddress = function () {
        if (this._signedIn) {
            return this.user.email;
        }
        else {
            return "Not Signed In";
        }
    };
    NavbarComponent.prototype.isSignedIn = function () {
        return this._signedIn;
    };
    NavbarComponent.prototype.signIn = function () {
        console.log("signIn called");
    };
    NavbarComponent.prototype.signOut = function () {
        console.log("signOut called");
        if (this.isSignedIn()) {
            try {
                this.authService.signOutUser();
            }
            catch (e) {
                console.log("LogOut error: " + e);
            }
        }
    };
    NavbarComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'navbar',
            templateUrl: 'navbar.component.html',
            styleUrls: ['navbar.component.css']
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService])
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;
//# sourceMappingURL=navbar.component.js.map