import { Injectable } from '@angular/core';
//import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore'
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http';
import { AngularFireDatabase } from 'angularfire2/database'

interface Note {
    content: string;
    hearts: Number;
    id?: string;
}
export class AdListing {
    content = 'dummy';
    posts = 'dummy';
    title = 'dummy';
}
@Injectable({
    providedIn: 'root'
})

export class DatabaseService {
    notesCollection: AngularFirestoreCollection<Note>;    // 
    notes: Observable<Note[]>;                          // 
    posts: any;
    ref: AngularFirestoreCollection;                             //
    constructor(private afs: AngularFirestore, private http: HttpClient, private db: AngularFireDatabase) {
        this.notesCollection = afs.collection('posts')
    }
    getData(): Observable<any> {
        this.notesCollection = this.afs.collection('users');
        this.notes = this.notesCollection.valueChanges();
        //console.log(this.notesCollection.snapshotChanges().subscribe(d => console.log(d)));
        //console.log(this.notes)
        return this.notes
    }
    getPosts = (userId = null) => {
        return !userId ? this.notesCollection.snapshotChanges() :
            this.afs.collection('posts', ref => ref.where('userId', '==', userId)).snapshotChanges();
    }
    getPost = (id: string) => {
        if (this.posts) {
            let post = this.posts.filter(post => {
                return post['id'] == id;
            });
            return post[0] || null;
        } else {
            console.log('inside else');

            return this.afs.collection('users').doc(id).get()
            // write logic to fetch new post from db
            //return this.afs.collection('users')
        }
    }
    publishData(data): Observable<any> {
        // code to publish the data goes here
        return
    }
    getFeed() {
        let url = 'https://newsapi.org/v2/everything?q=bitcoin&from=2019-06-09&sortBy=publishedAt&apiKey=da0e7b27925247b1a8d253943181ac9d&language=en'
        return this.http.get(url);
    }
    createAd(feed): any {
        return this.afs.collection('users').add(feed)
    }
    updateAd(ad: any, data: any) {
        return ad.update(data)
    }
}

