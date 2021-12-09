import { HttpClient } from '@angular/common/http';
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
      .post<any>(URL, 
        {

        }
      ).toPromise().then()
  }

}
