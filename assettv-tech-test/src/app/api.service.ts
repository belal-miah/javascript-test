import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Video } from './video';
import { environment } from '../environments/environment';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(
    private http: HttpClient) { }
  //To Do: Make API call to rerieve JSON list and resturn list of Videos 

  // Get All Videos
  getVideos (): Observable<Video[]> {
    let videoList = this.http.get<Video[]>(API_URL);
    console.log(videoList);
    

    return videoList;
  }

  // Get All Videos for Latest Tab with Tab Id 713
  // getLatestVideos (): Observable<Video[]> {
  //   let lastestVideos = this.http.get<Video[]>(API_URL);

  //   lastestVideos.content.713.forEach(vid => {
      
  //   });

  //   return null
  // }

  // Get All Videos for Most Viewed Tab with Tab Id 952

  // Get All Videos for Institutional Tab with Tab Id 6101
  
}
