import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
let CreatePostComponent = class CreatePostComponent {
    constructor(adService) {
        this.adService = adService;
        this.post = new FormControl('');
    }
    startNewAdListing() {
        console.log(this.post.value);
        this.ad = this.adService.createAd({ post: this.post.value });
        this.ad.valueChanges(d => {
            console.log(d);
        });
    }
};
CreatePostComponent = tslib_1.__decorate([
    Component({
        selector: 'app-create-post',
        templateUrl: './create-post.component.html',
        styleUrls: ['./create-post.component.scss']
    })
], CreatePostComponent);
export { CreatePostComponent };
//# sourceMappingURL=create-post.component.js.map