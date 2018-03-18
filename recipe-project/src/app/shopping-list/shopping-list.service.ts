import {Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";

@Injectable()
export class ShoppingListService{
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

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

}
