import { Component, OnInit } from '@angular/core';
import { CardModalService } from '../../services/card-modal.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {


  constructor( public cardModalService: CardModalService) { }

  ngOnInit(): void {
  }

}
