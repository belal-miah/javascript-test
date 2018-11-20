import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Video } from '../video';
import { from } from 'rxjs';

@Component({
  selector: 'app-video-grid',
  templateUrl: './video-grid.component.html',
  styleUrls: ['./video-grid.component.scss']
})

export class VideoGridComponent implements OnInit {
  videos: Video[];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getVideos();
    console.log(this.getVideos());
  }

  getVideos(): void {
    this.apiService.getVideos()
    .subscribe(videos => this.videos = videos);
  }

}
