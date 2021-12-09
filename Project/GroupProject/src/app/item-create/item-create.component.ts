import { HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.scss']
})
export class ItemCreateComponent implements OnInit {

  itemCreateForm = new FormGroup({
    iname: new FormControl(''),
    price: new FormControl(''),
    itemDescription: new FormControl('')
  });

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  async submit() {
    console.log(this.itemCreateForm.value)

    await this.http
      .post<any>('http://127.0.0.1:5000/', 
        {
          ItemName: this.itemCreateForm.value.iname,
          ItemPrice: this.itemCreateForm.value.price,
          ItemDescription: this.itemCreateForm.value.itemDescription
        }
      ).toPromise().then( response => {
        console.log(response)
      }
    )
  }

}
