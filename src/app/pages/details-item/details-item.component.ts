import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { ItemProduct } from '../../models/item-product';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-details-item',
  templateUrl: './details-item.component.html',
  styleUrls: ['./details-item.component.css']
})
export class DetailsItemComponent implements OnInit {

  item: any;
  routeId: string;

  constructor( private route: ActivatedRoute,
               public afs: AngularFirestore) { 
                this.route.paramMap.subscribe(params => {
                  this.routeId = params.get('id');
                });

               }

  ngOnInit(): void {
    let idRef = this.afs.collection('galler-products').doc(this.routeId);

    idRef.get().toPromise().then( (resp: any) => {
      return this.item = resp.data() ;
    });
  }





}
