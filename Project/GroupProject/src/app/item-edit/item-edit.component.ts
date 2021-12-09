import { HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.scss']
})
export class ItemEditComponent implements OnInit {

  itemEditForm = new FormGroup({
    iname: new FormControl(''),
    price: new FormControl(''),
    itemDescription: new FormControl('')
  });

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  async submit() {
    console.log(this.itemEditForm.value)

    await this.http
      .put<any>('http://127.0.0.1:5000/', 
        {
          ItemName: this.itemEditForm.value.iname,
          ItemPrice: this.itemEditForm.value.price,
          ItemDescription: this.itemEditForm.value.itemDescription
        }
      ).toPromise().then( response => {
        console.log(response)
      }
    )
  }


}
