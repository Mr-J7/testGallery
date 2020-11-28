import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardModalService {

  public hide = 'hide';
  
  public hideEdit = 'hide';

  constructor() { }


  open(){
    this.hide = '';
  }

  close(){
    this.hide = 'hide';
  }




  openEdit(){
    this.hideEdit = '';
  }

  closeEdit(){
    this.hideEdit = 'hide';
  }
}
