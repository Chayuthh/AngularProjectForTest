import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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
    this.service.postNameDetail().subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
