import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {
  items: any = [
    {
      "title": "test",
      "price": 79
    },
    {
      "title": "test2",
      "price": 90
    },
    {
      "title": "test3",
      "price": 88
    }
  ]
  loginStatus = 'Not logged in';


  constructor(private http: HttpClient) { }

  async ngOnInit(): Promise<void> {
    await this.http
      .get<any>("http://127.0.0.1:5000/")
      .toPromise().then(response => {
        console.log(response)
        // this.items = response;
      }
    )
  }

  onClick() {
    console.log("THIS WAS CLICKED");
  }
  
  onLogin() {
    this.loginStatus = "Logged in";
  }
}
