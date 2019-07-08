import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let HomeComponent = class HomeComponent {
    constructor(db) {
        this.db = db;
    }
    ngOnInit() {
        this.db.getPosts().subscribe(res => {
            this.posts = this.db.posts = res.map(post => {
                return Object.assign({ id: post.payload.doc.id }, post.payload.doc.data());
            });
        });
        // this.db.getData().subscribe(d => {
        //     this.posts = d;
        // })
    }
};
HomeComponent = tslib_1.__decorate([
    Component({
        selector: 'app-home',
        templateUrl: './home.component.html',
        styleUrls: ['./home.component.scss']
    })
], HomeComponent);
export { HomeComponent };
//# sourceMappingURL=home.component.js.map