import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let BloggerComponent = class BloggerComponent {
    constructor(srv) {
        this.srv = srv;
        console.log("inside constructor");
    }
    ngOnInit() {
        this.srv.getFeed().subscribe(f => {
            this.feeds = f['articles'];
        });
        console.log("inside oninit");
    }
};
BloggerComponent = tslib_1.__decorate([
    Component({
        selector: 'app-blogger',
        templateUrl: './blogger.component.html',
        styleUrls: ['./blogger.component.scss']
    })
], BloggerComponent);
export { BloggerComponent };
//# sourceMappingURL=blogger.component.js.map