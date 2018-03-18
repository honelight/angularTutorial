import {Component, Input, OnInit} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {letProto} from "rxjs/operator/let";
import {InternalNgModuleRef} from "@angular/core/src/linker/ng_module_factory";
import {ShoppingListService} from "./shopping-list.service";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers:[]
})
export class ShoppingListComponent implements OnInit {
  @Input() ingredients:Ingredient[] = [];
  constructor(private shoppingListService:ShoppingListService) { }

  onIngredientAdded(ingredient:Ingredient){

  }

  ngOnInit() {
    this.ingredients = this.shoppingListService.ingredients
  }

}
