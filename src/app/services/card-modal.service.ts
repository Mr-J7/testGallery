import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardModalService {

  public hide = 'hide';

  constructor() { }


  open(){
    this.hide = '';
  }

  close(){
    this.hide = 'hide';
  }
}
