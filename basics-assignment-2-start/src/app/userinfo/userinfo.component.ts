import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {

  username= '';

  constructor() { }

  ngOnInit() {
  }

  checkDisabled(){
    return this.username == '' ? true : false;
  }

  resetUser() {
    this.username = '';
  }

}
