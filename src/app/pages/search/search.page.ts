import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  key: any;

  constructor(
      private modalController: ModalController
  ) { }

  ngOnInit() {
  }

  onDismiss() {
    this.modalController.dismiss();
  }

  onClear() {
    this.key = '';
  }

  onKey() {
    console.log(this.key);
  }
}
