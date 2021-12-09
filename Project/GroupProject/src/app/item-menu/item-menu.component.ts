import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-menu',
  templateUrl: './item-menu.component.html',
  styleUrls: ['./item-menu.component.scss']
})
export class ItemMenuComponent implements OnInit {
  ItemID!: number;

  itemDescription!: String;
  price!: String;
  firstName!: String;
  lastName!: String;
  email!: String;
  phoneNumber!: String;
  location!: String;
  
  item!: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  async ngOnInit(): Promise<void> {
    this.ItemID = this.route.snapshot.params['itemID'];

    await this.http
      .get<any>("http://127.0.0.1:5000/get/" + this.ItemID)
      .toPromise().then(response => {
        console.log("http://127.0.0.1:5000/" + this.ItemID)
        console.log(response)
        this.item = response;
      }
    )
  }

}
