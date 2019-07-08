import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../services/database.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    posts: any;

    constructor(public db: DatabaseService) { }

    ngOnInit() {
        this.db.getPosts().subscribe(res => {
            this.posts = this.db.posts = res.map(post => {
                return {
                    id: post.payload.doc.id,
                    ...post.payload.doc.data()
                }
            });
        })
        // this.db.getData().subscribe(d => {
        //     this.posts = d;
        // })
    }
}
