import { Component, OnInit } from '@angular/core';
import { CardModalService } from '../../services/card-modal.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FirebaseService } from 'src/app/services/firebase.service';
import { ItemProduct } from '../../models/item-product';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  formEditProduct: FormGroup

  itemCard: ItemProduct;

  constructor( public cardModalService: CardModalService,
               private fb: FormBuilder,
               private fbservice: FirebaseService) {                 
                 this.createForm();
                }


  ngOnInit(): void {
     this.setForm();

  }



  createForm( ){
    this.formEditProduct = this.fb.group({
      name: [''],
      img: [],
      information: [''],
      price: []
    });
  }


  setForm(){
    this.fbservice.itemCard.subscribe(res => {

      this.formEditProduct.setValue({
        name: res.name,
        img: null,
        information: res.information,
        price: res.price
      });
    });
  }



  edit( ){
    this.fbservice.editProduct(this.formEditProduct.value);
    this.cardModalService.closeEdit();
}


close(){
  this.cardModalService.closeEdit();
  this.createForm();
  this.formEditProduct.reset();
}


}
