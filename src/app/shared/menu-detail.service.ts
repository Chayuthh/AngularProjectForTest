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
  list?: MenuDetail[];

  postNameDetail() {
    return this.http.post(this.apiURL, this.formData);
  }

  puttNameDetail() {
    return this.http.put(`${this.apiURL}/${this.formData.id}`, this.formData);
  }

  deleteNameDetail(id: number) {
    return this.http.delete(`${this.apiURL}/${id}`);
  }

  refreshList() {
    this.http
      .get(this.apiURL)
      .toPromise()
      .then((res) => (this.list = res as MenuDetail[]));
  }
}
