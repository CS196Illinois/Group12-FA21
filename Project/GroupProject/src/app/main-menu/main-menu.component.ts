import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  loginStatus = 'Not logged in';

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    console.log("THIS WAS CLICKED");
  }
  onLogin() {
    this.loginStatus = "Logged in";
  }
}
