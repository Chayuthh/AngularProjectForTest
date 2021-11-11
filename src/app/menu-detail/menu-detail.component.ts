import { Component, OnInit } from '@angular/core';
import { MenuDetail } from '../shared/menu-detail.model';
import { MenuDetailService } from '../shared/menu-detail.service';

@Component({
  selector: 'app-menu-detail',
  templateUrl: './menu-detail.component.html',
  styleUrls: [],
})
export class MenuDetailComponent implements OnInit {
  constructor(public service: MenuDetailService) {}

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(selectedRecord: MenuDetail) {
    this.service.formData = Object.assign({}, selectedRecord);
  }

  onDelete(id: number) {
    this.service.deleteNameDetail(id).subscribe(
      (res) => {
        console.log(res);
        this.service.refreshList();
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
