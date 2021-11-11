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

  constructor() { }

  ngOnInit(): void {
  }

  test() {
    console.log(this.itemEditForm.value)
  }

}
