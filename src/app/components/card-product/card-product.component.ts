import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ItemProduct } from '../../models/item-product';
import { FirebaseService } from '../../services/firebase.service';
import { CardModalService } from '../../services/card-modal.service';



@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent implements OnInit {



  private itemsCollection: AngularFirestoreCollection<any>;
  items: Observable<any[]>;
  idItems: any[] = [];
  id: any;



  constructor(private afs: AngularFirestore,
              public fbService: FirebaseService,
              public cardModaService: CardModalService) {
    this.itemsCollection = afs.collection<any>('galler-products');
    this.items = this.itemsCollection.valueChanges({ idField: 'id'});

  }
  addItem(item: any) {
    this.itemsCollection.add(item);
  }

  ngOnInit(){}



  cardData( item: ItemProduct, id: string){
   this.fbService.itemCard.next(item);
   this.fbService.idItem.next(id);
   this.cardModaService.open();
  }


  edit(item: ItemProduct, id: string){
    this.cardModaService.openEdit();
    this.fbService.itemCard.next(item);
    this.fbService.idItem.next(id);
  }


  delete(id: string){
    console.log(id);
      this.fbService.deleteProduct(id);

  }








}
