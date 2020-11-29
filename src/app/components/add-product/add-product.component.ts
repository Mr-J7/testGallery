import { Component, OnInit } from '@angular/core';
import { CardModalService } from '../../services/card-modal.service';
import { FormGroup, FormControl, Form, NgForm, FormBuilder, Validators } from '@angular/forms';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { ItemProduct } from '../../models/item-product';
import { AngularFireStorage } from '@angular/fire/storage';
import { FirebaseService } from 'src/app/services/firebase.service';



@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

formProduct: FormGroup;

product: ItemProduct;

uploadPercent: any;

urlImg: any = '';

nameFile: string;

  constructor( public cardModalService: CardModalService,
               public fStorage: AngularFireStorage,
               private afs: AngularFirestore,
               private fb: FormBuilder,
               public fbservice: FirebaseService) {
              this.createForm();
              console.log(this.urlImg);
              console.log(this.formProduct);

  }


  ngOnInit(): void {
  }

  createForm(){
    this.formProduct = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      img: ['', [Validators.required] ],
      information: ['', [Validators.required, Validators.minLength(10)]],
      price: ['', [Validators.required]]
    });
  }


  save(){
    this.product = this.formProduct.value;
    this.fbservice.addProduct(this.product);
    this.cardModalService.close();
    this.formProduct.reset();
    this.nameFile = '';
  }

  onUpload(e){
    this.nameFile = e.target.files[0].name;
    this.fbservice.uploadImg(e);
    console.log(this.fbservice.urlImg);
    this.fbservice.uploadPercent.subscribe( res => this.uploadPercent = res);
  }


}
