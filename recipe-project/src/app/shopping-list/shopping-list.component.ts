import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {letProto} from "rxjs/operator/let";
import {InternalNgModuleRef} from "@angular/core/src/linker/ng_module_factory";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  constructor() { }

  onIngredientAdded(ingredient:Ingredient){
    for(let element of this.ingredients){
      if(element.name === ingredient.name){
        ingredient = new Ingredient(element.name,  element.amount+ingredient.amount);
        var index = this.ingredients.indexOf(element);
        this.ingredients.splice(index, 1);
      }
    }
    this.ingredients.push(ingredient);
  }

  ngOnInit() {
  }

}
