import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit {
  ngOnInit(): void {
    firebase.initializeApp({
      apiKey:"AIzaSyD2Lu5zxr1nEUvofPVEqLwt4a3SnW-odeM",
      authDomain:"ng-recipe-book-c4bac.firebaseapp.com"
    })
  }
  // mode = 'recipe';
  //
  // onModeSwitched(input: string){
  //   if (input === 'recipe'){
  //     this.mode = 'recipe'
  //   }
  //   else if (input === 'shopList'){
  //     this.mode = 'shopList';
  //   }
  // }

}
