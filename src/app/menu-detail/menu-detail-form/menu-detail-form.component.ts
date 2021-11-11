import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MenuDetail } from 'src/app/shared/menu-detail.model';
import { MenuDetailService } from 'src/app/shared/menu-detail.service';

@Component({
  selector: 'app-menu-detail-form',
  templateUrl: './menu-detail-form.component.html',
  styleUrls: ['./menu-detail-form.component.css'],
})
export class MenuDetailFormComponent implements OnInit {
  constructor(public service: MenuDetailService) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    if (this.service.formData.id == 0) {
      this.insertRecord(form);
    } else {
      this.updateRecord(form);
    }
  }

  insertRecord(form: NgForm) {
    this.service.postNameDetail().subscribe(
      (res) => {
        this.resetForm(form);
        this.service.refreshList();
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  updateRecord(form: NgForm) {
    this.service.puttNameDetail().subscribe(
      (res) => {
        this.resetForm(form);
        this.service.refreshList();
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new MenuDetail();
  }
}
