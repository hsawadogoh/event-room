import { Component, OnInit } from '@angular/core';
import {NavController} from "@ionic/angular";
import {Router} from "@angular/router";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {

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
