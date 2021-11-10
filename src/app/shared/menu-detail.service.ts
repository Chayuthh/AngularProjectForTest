import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MenuDetail } from './menu-detail.model';

@Injectable({
  providedIn: 'root',
})
export class MenuDetailService {
  apiURL = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  formData: MenuDetail = new MenuDetail();
}
