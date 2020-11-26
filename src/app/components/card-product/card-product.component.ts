import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent implements OnInit {

  private itemsCollection: AngularFirestoreCollection<any>;
  items: Observable<any[]>;

  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<any>('galler-products');
    this.items = this.itemsCollection.valueChanges();
  }
  addItem(item: any) {
    this.itemsCollection.add(item);
  }s

  ngOnInit(){}
}
