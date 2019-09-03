import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PostService } from '../post-service/post.service';
import { FuseConfigService } from '@fuse/services/config.service';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.scss']
})
export class WallComponent implements OnInit {
  services;
  user = 'charles';
  title = 'charles will hungout with you for $40';
  description = 'I will hungout with you for 1 hour and teach you programming, how to socialize and make new friends';
  rating = ['start', 'start', 'start', 'star_half', 'start_border'];
  postTime = '20 mins. ago';
  constructor(
    private _fuseConfigService: FuseConfigService,
    private _postService: PostService
  ) {

    this._fuseConfigService.config = {
      layout: {
        navbar: {
          hidden: false
        },
        toolbar: {
          hidden: false
        },
        footer: {
          hidden: false
        },
        sidepanel: {
          hidden: false
        }
      }
    };
  }

  ngOnInit(): void {
    this._postService.GetService().subscribe(res => {
      this.services = res.map(e => {
        if (e.payload.doc.data().uid !== '') {

        }
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as object;
      });

      // this.services = this.services.filter(serv => {
      //   if (serv.uid !== '4bJQEUv2mBdr5HfQlha1qMDjXJR2') {
      //     return serv;
      //   }

      // });
      console.log(this.services);
    });
  }
}
