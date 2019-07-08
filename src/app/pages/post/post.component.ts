import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { DatabaseService } from '../../services/database.service';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

    constructor(private route: ActivatedRoute, private db: DatabaseService) { }
    post: object;

    ngOnInit() {
        this.route.params.subscribe(res => {
            let postData: any = this.db.getPost(res.id);
            if (postData.hasOwnProperty('id')) {
                this.post = postData;
                console.log("inside if", this.post)
            } else {
                postData.subscribe(res => {
                    this.post = {
                        id: res.id,
                        ...res.data()
                    }
                    console.log("inside subscribe", res)
                });
            }
        });
    }
}
