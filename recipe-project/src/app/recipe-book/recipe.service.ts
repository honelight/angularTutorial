import {EventEmitter, Injectable, Input, Output} from "@angular/core";
import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";
import {Subject} from "rxjs/Subject";
import {letProto} from "rxjs/operator/let";

@Injectable()
export class RecipeService{

  recipesChanged = new Subject<Recipe[]>();
  editSubject = new Subject<Recipe>();

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

  constructor(
    private shoppingListService:ShoppingListService
  ){

  }

  @Input() currentRecipe:Recipe;
  // @Output() currentRecipeChangeEmitter:EventEmitter<Recipe> = new EventEmitter<Recipe>();

  getRecipes(){
    return this.recipes.slice();
  }

  addIngredients(ingredients:Ingredient[]){
    for (var ingredient of ingredients){
      this.shoppingListService.addIngredients(ingredient);
    }
    this.shoppingListService.ingredientsChanged.next(this.shoppingListService.ingredients);
  }

  getRecipe(id:Number):Recipe{
    var output = this.recipes.filter(instance=>
      instance.id === id
    )
    if (output.length === 0){
      return null;
    }
    else {
      return output[0];
    }
  }

  setRecipes(recipes:Recipe[]){
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  editRecipe(recipe:Recipe){
    var i = 0;
    for (let index=0; index < this.recipes.length; index++){
      if(this.recipes[index].id === recipe.id){
        i = index;
        break;
      }
    }
    this.recipes[i]=recipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  addRecipe(name:string, description:string, picture:string, ingredients:Ingredient[]){
    var indexes:number[] = this.recipes.map(instance=>instance.id);
    var maxIndex = Math.max(...indexes);
    this.recipes.push(new Recipe(
      maxIndex+1,
      name,
      description,
      picture,
      ingredients
    ));
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(id:number){
    var i = 0;
    for (let index=0; index < this.recipes.length; index++){
      if(this.recipes[i].id === id){
        i = index;
        break;
      }
    }
    this.recipes.splice(i, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
