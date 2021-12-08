import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  
  firstName!: String;
  lastName!: String;
  location!: String;
  phoneNumber!: String;
  email!: String;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.firstName = this.route.snapshot.params['firstName'];
    this.lastName = this.route.snapshot.params['lastName'];
    this.location = this.route.snapshot.params['location'];
    this.phoneNumber = this.route.snapshot.params['phoneNumber'];
    this.email = this.route.snapshot.params['email'];
  }

}
