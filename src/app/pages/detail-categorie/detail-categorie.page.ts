import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detail-categorie',
  templateUrl: './detail-categorie.page.html',
  styleUrls: ['./detail-categorie.page.scss'],
})
export class DetailCategoriePage implements OnInit {
  title: string;
  image: string;
  constructor(
      private activedRouter: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.title = this.activedRouter.snapshot.queryParams.categorie;
    this.image = this.activedRouter.snapshot.queryParams.image;
  }

}
