import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let PostComponent = class PostComponent {
    constructor(route, db) {
        this.route = route;
        this.db = db;
    }
    ngOnInit() {
        this.route.params.subscribe(res => {
            let postData = this.db.getPost(res.id);
            if (postData.hasOwnProperty('id')) {
                this.post = postData;
                console.log("inside if", this.post);
            }
            else {
                postData.subscribe(res => {
                    this.post = Object.assign({ id: res.id }, res.data());
                    console.log("inside subscribe", res);
                });
            }
        });
    }
};
PostComponent = tslib_1.__decorate([
    Component({
        selector: 'app-post',
        templateUrl: './post.component.html',
        styleUrls: ['./post.component.scss']
    })
], PostComponent);
export { PostComponent };
//# sourceMappingURL=post.component.js.map