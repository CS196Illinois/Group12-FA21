import { HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.scss']
})
export class ItemEditComponent implements OnInit {
  ItemID!: number;
  itemEditForm = new FormGroup({
    iname: new FormControl(''),
    price: new FormControl(''),
    itemDescription: new FormControl('')
  });

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.ItemID = this.route.snapshot.params['itemID'];
    
  }

  async submit() {
    console.log(this.itemEditForm.value)
    console.log('poopoo')
    console.log('http://127.0.0.1:5000/update/' + this.ItemID)

    await this.http
      .put<any>('http://127.0.0.1:5000/update/' + this.ItemID, 
        {
          ItemName: this.itemEditForm.value.iname,
          ItemPrice: this.itemEditForm.value.price,
          ItemDescription: this.itemEditForm.value.itemDescription
        }
      ).toPromise().then( response => {
        console.log('http://127.0.0.1:5000/update/' + this.ItemID)
        console.log(response)
      }
    )
  }


}
