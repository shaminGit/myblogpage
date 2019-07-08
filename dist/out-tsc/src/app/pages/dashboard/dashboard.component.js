import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let DashboardComponent = class DashboardComponent {
    constructor(auth, db) {
        this.auth = auth;
        this.db = db;
    }
    ngOnInit() {
        let uid = JSON.parse(localStorage.getItem('user'));
        this.db.getPosts(uid['profile']['id']).subscribe(res => {
            this.posts = res.map(post => {
                console.log(post);
                return Object.assign({ id: post.payload.doc.id }, post.payload.doc.data());
            });
        });
    }
};
DashboardComponent = tslib_1.__decorate([
    Component({
        selector: 'app-dashboard',
        templateUrl: './dashboard.component.html',
        styleUrls: ['./dashboard.component.scss']
    })
], DashboardComponent);
export { DashboardComponent };
//# sourceMappingURL=dashboard.component.js.map