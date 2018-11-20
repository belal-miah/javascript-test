import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Video } from '../video';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-video-grid',
  templateUrl: './video-grid.component.html',
  styleUrls: ['./video-grid.component.scss']
})

export class VideoGridComponent implements OnInit {
  videos: Video[];
  observableTest: Observable<any>
  errorMessage: String;
  user_data: any;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    
  }

  // Function to call api siervice and grab list of videos. 
  // TODO: Filter to take in tab id/name/key to filter results in object based on tab
  /* getVideos(): void {
    this.apiService.getVideos().subscribe(
      res => {
          let video = res[0]['content'];
          let video = video["713"];
          console.log(video_data[0]["title"]);
          this.video_data = video_data;
      }
    )
  } */

}
