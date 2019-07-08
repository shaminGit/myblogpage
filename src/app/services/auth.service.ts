import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private afAuth: AngularFireAuth) { }
    public user: object = null;
    
    isLoggedIn () {
        return this.afAuth.authState.toPromise();
    }

    login() {
        console.log("Signing in");
        return this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    }

    logout() {
        return this.afAuth.auth.signOut();
    }
}
