import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { DatabaseService } from '../../services/database.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    constructor(private auth: AuthService, private db: DatabaseService) { }

    posts: Array<object>;
    ngOnInit() {
        let uid = JSON.parse(localStorage.getItem('user'));

        this.db.getPosts(uid['profile']['id']).subscribe(res => {
            this.posts = res.map(post => {
                console.log(post);
                return {
                    id: post.payload.doc.id,
                    ...post.payload.doc.data()
                }
            });
        })

    }

}
