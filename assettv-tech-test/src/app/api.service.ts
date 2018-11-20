import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, } from 'rxjs';
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
  getVideos (): Observable<any> {
    return this.http.get<any>(API_URL);;
  }

  // Get All Videos for Latest Tab with Tab Id 713

  // Get All Videos for Most Viewed Tab with Tab Id 952

  // Get All Videos for Institutional Tab with Tab Id 6101
  
}
