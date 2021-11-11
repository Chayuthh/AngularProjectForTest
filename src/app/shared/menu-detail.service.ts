import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MenuDetail } from './menu-detail.model';

@Injectable({
  providedIn: 'root',
})
export class MenuDetailService {
  readonly apiURL = 'http://192.168.1.42:5041/api/PraticeModels';
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  formData: MenuDetail = new MenuDetail();

  postNameDetail() {
    return this.http.post(this.apiURL, this.formData);
  }
}
