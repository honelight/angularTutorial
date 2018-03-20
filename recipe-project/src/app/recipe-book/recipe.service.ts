import {EventEmitter, Injectable, Input, Output} from "@angular/core";
import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService{

  private recipes: Recipe[] = [
    new Recipe(
      1,
      'Caesar salad',
      'A refreshment before meal',
      'https://upload.wikimedia.org/wikipedia/commons/2/23/Caesar_salad_%282%29.jpg',
      [
          new Ingredient('Lettuce',1),
          new Ingredient('Hard Bread', 1)
        ]),
    new Recipe(
      2,
      'Heart Attack Burger',
      'Need to eat this',
      'https://upload.wikimedia.org/wikipedia/commons/8/80/Guacamole_Pepper-Jack_Burger.jpg',
      [
          new Ingredient('Buns', 2),
          new Ingredient('Meat', 1),
          new Ingredient('Bacon', 1),
          new Ingredient('Fries', 1)
        ])
  ];

  constructor(private shoppingListService:ShoppingListService){

  }

  @Input() currentRecipe:Recipe;
  @Output() currentRecipeChangeEmitter:EventEmitter<Recipe> = new EventEmitter<Recipe>();

  getRecipes(){
    return this.recipes.slice();
  }

  addIngredients(ingredients:Ingredient[]){
    for (var ingredient of ingredients){
      this.shoppingListService.addIngredients(ingredient);
    }
  }

}
