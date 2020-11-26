import { Component } from '@angular/core';
import { CardModalService } from './services/card-modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testGallery';

  constructor( public cardModalService: CardModalService){}

}
