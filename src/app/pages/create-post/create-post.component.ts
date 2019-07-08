import { Component } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent {
  ad: any;
  post = new FormControl('');
  constructor(private adService: DatabaseService) { }

  startNewAdListing() {
    console.log(this.post.value)
    let uid = JSON.parse(localStorage.getItem('user'));
    let id = uid['profile']['id']
    let feed = {
      post: this.post.value,
      userkey: id
    }
    this.ad = this.adService.createAd(feed)

  }
}
