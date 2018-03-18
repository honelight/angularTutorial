import {Component, Input, OnInit} from '@angular/core';
import {UserService} from "./user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @Input() playerCount:{name:string, count: number}[] = [];

  constructor(private userService:UserService){}

  ngOnInit(){
    this.userService.onInit();
  }
}
