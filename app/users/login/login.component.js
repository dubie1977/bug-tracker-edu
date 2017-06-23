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
var forms_1 = require('@angular/forms');
var auth_service_1 = require('../../core/service/auth.service');
var navbar_component_1 = require('../../navbar/navbar.component');
var user_1 = require('../../core/model/user');
var LoginComponent = (function () {
    function LoginComponent(formB, authService) {
        this.formB = formB;
        this.authService = authService;
        this.navbar = new navbar_component_1.NavbarComponent(this.authService);
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.configureForm();
    };
    LoginComponent.prototype.getUserEmail = function () {
        if (this._user == null) {
            return "Not Logged In";
        }
        else {
            return this._user.email;
        }
    };
    LoginComponent.prototype.configureForm = function () {
        this.loginForm = this.formB.group({
            emailAddress: [this._emailAddress, [forms_1.Validators.required]],
            password: [this._password, [forms_1.Validators.required]]
        });
    };
    LoginComponent.prototype.logout = function () {
        var _this = this;
        try {
            this.authService.signOutUser().then(function (authData) {
                _this._user = null;
            });
        }
        catch (e) {
        }
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        console.log("signIn called");
        var email = this.loginForm.value["emailAddress"];
        var password = this.loginForm.value["password"];
        var user;
        try {
            this.authService.signInUser(email, password).subscribe(function (authData) {
                console.log("logged in");
                _this._user = new user_1.User("uid", email, null, null, null, null);
                //return true;
            });
        }
        catch (e) {
        }
        finally {
            if (user == null) {
            }
        }
    };
    LoginComponent.prototype.createAccount = function () {
        var email = this.loginForm.value["emailAddress"];
        var password = this.loginForm.value["password"];
        this.authService.createLogin(email, password).then(function (authData) {
            console.log("logged in");
        }).catch(function (err) {
            console.log("Error: " + err);
        });
    };
    __decorate([
        core_1.ViewChild(navbar_component_1.NavbarComponent), 
        __metadata('design:type', Object)
    ], LoginComponent.prototype, "navbar", void 0);
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'login',
            templateUrl: 'login.component.html',
            styleUrls: ['login.component.css']
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, auth_service_1.AuthService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map