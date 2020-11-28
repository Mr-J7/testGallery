import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject, Subject } from 'rxjs';
import { ItemProduct } from '../models/item-product';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  itemCard = new Subject<ItemProduct>();

  idItem = new Subject<string>();
  id: string;

  constructor(private afs: AngularFirestore) {
    this.idItem.subscribe(r=> this.id = r);
   }

  addProduct( product: ItemProduct){
    this.afs.collection('galler-products').add({
      name: product.name,
      img: product.img,
      information: product.information,
      price: product.price
    })
    .then( resp => {
      console.log('todo bien');
    });

  }


  editProduct(item: ItemProduct ){

      this.afs.collection('galler-products').doc(this.id).set({ 
        name: item.name,
        img: item.img,
        information: item.information,
        price: item.price
      })
      .then( resp=>{
        console.log('Actualizacion correcta');
      });

  }


  deleteProduct(id: string){
    this.afs.collection('galler-products').doc(id).delete()
      .then( resp =>{
        console.log(resp);
      })
  }


}
