import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { BehaviorSubject, Subject, Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { ItemProduct } from '../models/item-product';
import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  itemCard = new Subject<ItemProduct>();

  idItem = new Subject<string>();
  id: string;

  urlImg: any;
  uploadPercent: Observable<any>;

  constructor(private afs: AngularFirestore,
              private fStorage: AngularFireStorage,) {
    this.idItem.subscribe(r=> this.id = r);
   }

  addProduct( product: ItemProduct){

      this.afs.collection('galler-products').add({
        name: product.name,
        img: this.urlImg,
        information: product.information,
        price: product.price
      })
      .then( resp => {
        Swal.fire({
          icon: 'success',
          title: 'Your item has been saved',
          showConfirmButton: false,
          timer: 1500
        })
      });


  }

  editProduct(item: ItemProduct ){

      this.afs.collection('galler-products').doc(this.id).set({ 
        name: item.name,
        img: this.urlImg,
        information: item.information,
        price: item.price
      })
      .then( resp=>{
        Swal.fire({
          icon: 'success',
          title: 'Item Updated',
          showConfirmButton: false,
          timer: 1500
        })
      });

  }





  uploadImg(f){
    const id = Math.random().toString(30).substring(2)
    const file = f.target.files[0];
    const filePath = `upload/item-${id}`;
    const ref = this.fStorage.storage.ref(filePath);
    const task = this.fStorage.upload(filePath, file);
    this.uploadPercent = task.percentageChanges();
    task.snapshotChanges()
      .pipe(
        finalize(()=>{
          const url = ref.getDownloadURL().then(res => {
            this.urlImg = res; 
            console.log(this.urlImg)
          });
        })
      ).subscribe( resp=> console.log(resp))


  }




  deleteProduct(id: string){
    this.afs.collection('galler-products').doc(id).delete()
      .then();
  }


}
