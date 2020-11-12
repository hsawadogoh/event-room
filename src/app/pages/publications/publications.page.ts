import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.page.html',
  styleUrls: ['./publications.page.scss'],
})
export class PublicationsPage implements OnInit {
  date = new Date();

  constructor(
      private router: Router
  ) { }

  ngOnInit() {
  }

  onShowDetail(categorie: string, image: string) {
    this.router.navigate(['detail-categorie'], {
      queryParams: {
        categorie,
        image
      }
    });
  }

}
