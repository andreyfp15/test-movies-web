import { Component, OnInit } from '@angular/core';
import { Helper } from '../../app.helper';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  search(){
    Helper.showLoader();
    setTimeout(function(){ 
      Helper.hideLoader();
     }, 3000);
  }

}
