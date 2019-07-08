import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let LoginComponent = class LoginComponent {
    constructor(auth, route, zone) {
        this.auth = auth;
        this.route = route;
        this.zone = zone;
        this.signIn = () => {
            console.log("sign In");
            this.auth.login().then(res => {
                console.log(res);
                // this.auth.user = res.additionalUserInfo;
                localStorage.setItem('user', JSON.stringify(res.additionalUserInfo));
                this.zone.run(() => {
                    this.route.navigate(['/dashboard']);
                });
            }).catch(err => {
                console.log("error occured :", err);
            });
        };
    }
    ngOnInit() {
    }
};
LoginComponent = tslib_1.__decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.scss']
    })
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map