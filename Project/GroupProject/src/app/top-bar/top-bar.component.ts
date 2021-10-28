import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  oginStatus = 'Not logged in';

  onClick() {
    console.log("THIS WAS CLICKED");
  }
  
  // onLogin() {
  //   this.loginStatus = "Logged in";
  // }
}
