import {Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {Subject} from "rxjs/Subject";
import {Subscription} from "rxjs/Subscription";

@Injectable()
export class ShoppingListService{

  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  startedEditting = new Subject<number>();
  ingredientsChanged = new Subject<Ingredient[]>();



  addIngredients(ingredient:Ingredient){
    for(let element of this.ingredients){
      if(element.name === ingredient.name){
        ingredient = new Ingredient(element.name,  element.amount+ingredient.amount);
        var index = this.ingredients.indexOf(element);
        this.ingredients.splice(index, 1);
      }
    }
    this.ingredients.push(ingredient);
  }

  selectIngredient:number = null;

  removeIngredient(){
    if (this.selectIngredient!=null){
      this.ingredients.splice(this.selectIngredient,1);
    }
    this.selectIngredient=null;
  }

  removeIngredientIdx(index:number){
    if (index>=0 && index< this.ingredients.length){
      this.ingredients.splice(index, 1);
    }
  }

  getIngredients(){

  }

  getIngredient(index:number){
    return this.ingredients[index];
  }

  updateIngredient(index:number, ingredient:Ingredient){
    this.ingredients[index]=ingredient;
  }

}
