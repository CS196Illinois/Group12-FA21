import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-menu',
  templateUrl: './item-menu.component.html',
  styleUrls: ['./item-menu.component.scss']
})
export class ItemMenuComponent implements OnInit {

  itemDescription!: String;
  price!: String;
  firstName!: String;
  lastName!: String;
  email!: String;
  phoneNumber!: String;
  location!: String;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.price = this.route.snapshot.params['price'];
    this.itemDescription = this.route.snapshot.params['itemDescription'];
    this.firstName = this.route.snapshot.params['firstName'];
    this.lastName = this.route.snapshot.params['lastName'];
    this.email = this.route.snapshot.params['email'];
    this.phoneNumber = this.route.snapshot.params['phoneNumber'];
    this.location = this.route.snapshot.params['location'];

  }

}
