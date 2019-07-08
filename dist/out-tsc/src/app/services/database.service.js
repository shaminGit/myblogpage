import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
export class AdListing {
    constructor() {
        this.content = 'dummy';
        this.posts = 'dummy';
        this.title = 'dummy';
    }
}
let DatabaseService = class DatabaseService {
    constructor(afs, http, db) {
        this.afs = afs;
        this.http = http;
        this.db = db;
        this.getPosts = (userId = null) => {
            return !userId ? this.notesCollection.snapshotChanges() :
                this.afs.collection('posts', ref => ref.where('userId', '==', userId)).snapshotChanges();
        };
        this.getPost = (id) => {
            if (this.posts) {
                let post = this.posts.filter(post => {
                    return post['id'] == id;
                });
                return post[0] || null;
            }
            else {
                console.log('inside else');
                return this.afs.collection('users').doc(id).get();
                // write logic to fetch new post from db
                //return this.afs.collection('users')
            }
        };
        this.notesCollection = afs.collection('posts');
    }
    getData() {
        this.notesCollection = this.afs.collection('users');
        this.notes = this.notesCollection.valueChanges();
        //console.log(this.notesCollection.snapshotChanges().subscribe(d => console.log(d)));
        console.log(this.notes);
        return this.notes;
    }
    publishData(data) {
        // code to publish the data goes here
        return;
    }
    getFeed() {
        let url = 'https://newsapi.org/v2/everything?q=bitcoin&from=2019-06-02&sortBy=publishedAt&apiKey=0509917cd7f7446ca8bb485e6d9ad8a4&language=en';
        return this.http.get(url);
    }
    createAd(feed) {
        return this.afs.collection('users').add(feed);
    }
    updateAd(ad, data) {
        return ad.update(data);
    }
};
DatabaseService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], DatabaseService);
export { DatabaseService };
//# sourceMappingURL=database.service.js.map