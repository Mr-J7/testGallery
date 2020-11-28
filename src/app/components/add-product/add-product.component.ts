import { Component, OnInit } from '@angular/core';
import { CardModalService } from '../../services/card-modal.service';
import { FormGroup, FormControl, Form, NgForm, FormBuilder } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ItemProduct } from '../../models/item-product';
import { FirebaseService } from '../../services/firebase.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

formProduct: FormGroup;

product: ItemProduct;
editProduct: ItemProduct;

  constructor( public cardModalService: CardModalService,
               private fb: FormBuilder,
               private fbservice: FirebaseService) {
              this.createForm();
  }


  ngOnInit(): void {}

  createForm(){
    this.formProduct = this.fb.group({
      name: [''],
      img: [''],
      information: [''],
      price: ['']
    });
  }


  save(){
    this.product = this.formProduct.value;
    this.fbservice.addProduct(this.product);
    this.cardModalService.close()
  }


}
