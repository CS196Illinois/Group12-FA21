import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-preview',
  templateUrl: './item-preview.component.html',
  styleUrls: ['./item-preview.component.scss']
})
export class ItemPreviewComponent implements OnInit {
  
  title!: String;
  price!: String;

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.title = this.route.snapshot.params['title'];
    this.price = this.route.snapshot.params['price'];
  }

}
