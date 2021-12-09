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

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.ItemID = this.route.snapshot.params['itemID'];
  }

}
