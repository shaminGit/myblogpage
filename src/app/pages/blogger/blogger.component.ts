import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
@Component({
  selector: 'app-blogger',
  templateUrl: './blogger.component.html',
  styleUrls: ['./blogger.component.scss']
})
export class BloggerComponent implements OnInit {
  public feeds: any;
  constructor(private srv: DatabaseService) {
    console.log("inside constructor")
  }
  ngOnInit() {
    this.srv.getFeed().subscribe(f => {
      this.feeds = f['articles'];
    })
    console.log("inside oninit")
  }
}
