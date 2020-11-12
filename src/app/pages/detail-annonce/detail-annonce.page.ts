import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detail-annonce',
  templateUrl: './detail-annonce.page.html',
  styleUrls: ['./detail-annonce.page.scss'],
})
export class DetailAnnoncePage implements OnInit {
  title: string;
  image: string;
  date = new Date();
  constructor(
      private activedRouter: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.title = this.activedRouter.snapshot.queryParams.categorie;
    this.image = this.activedRouter.snapshot.queryParams.image;
  }

  onShowAnnonce(danse: string, jpeg: string) {

  }
}
