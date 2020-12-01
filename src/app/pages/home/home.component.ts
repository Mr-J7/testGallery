import { Component, OnInit } from '@angular/core';
import { CardModalService } from 'src/app/services/card-modal.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public cardModalService: CardModalService) { }

  ngOnInit(): void {
  }

}
