import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  activeSideNav: boolean = false;

  constructor( public appComponent: AppComponent) { }

  ngOnInit() {
  }

  selectedItem(item) {
    this.appComponent.selectedItem = item;
  }
  openMenu() {
    this.activeSideNav = true;

  }

  closeMenu() {
    this.activeSideNav = false;
  }
}
