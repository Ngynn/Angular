import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Item } from './models/item.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'WEb';


  itemForm!: FormGroup;

  ngOnInit(): void {
    this.itemForm = new FormGroup({
      id: new FormControl(Date.now(), [Validators.required]),
      name: new FormControl('', [Validators.required]),
      price: new FormControl(0, [Validators.required]),
      description: new FormControl('', [Validators.required]),
      imgSrc: new FormControl(
        'https://product.hstatic.net/1000075078/product/bottlecfsd_496652_1603eae72b8b4d698a7d872ae604df81_large.jpg'
      ),
    });
  }

  itemList: Item[] = [
    {
      id: Date.now(),
      name: 'Cafe sữa đá chai FRESH 250ML',
      price: 75,
      description: 'Phê !!!',
      imgSrc: 'https://product.hstatic.net/1000075078/product/bottlecfsd_496652_1603eae72b8b4d698a7d872ae604df81_large.jpg',
    },
  ];

  addItem(newItem: Item) {
    this.itemList.push(newItem);
  }
  delete(value: number) {
    const index = this.itemList.findIndex(item => item.id == value);
    if (index !== -1) {
      this.itemList.splice(index, 1);
    }
  }
}
