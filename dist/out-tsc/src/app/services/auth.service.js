import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { auth } from 'firebase/app';
let AuthService = class AuthService {
    constructor(afAuth) {
        this.afAuth = afAuth;
        this.user = null;
    }
    isLoggedIn() {
        return this.afAuth.authState.toPromise();
    }
    login() {
        console.log("Signing in");
        return this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    }
    logout() {
        return this.afAuth.auth.signOut();
    }
};
AuthService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], AuthService);
export { AuthService };
//# sourceMappingURL=auth.service.js.map