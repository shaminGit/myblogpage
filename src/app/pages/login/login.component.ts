import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    constructor(private auth: AuthService, private route: Router, private zone: NgZone) { }

    ngOnInit() {
    }

    signIn = () => {
        console.log("sign In");
        this.auth.login().then(res => {
            console.log(res);
            // this.auth.user = res.additionalUserInfo;
            localStorage.setItem('user', JSON.stringify(res.additionalUserInfo));

            this.zone.run(() => {
                this.route.navigate(['/dashboard']);
            })
        }).catch(err => {
            console.log("error occured :", err);
        })
    }

}
