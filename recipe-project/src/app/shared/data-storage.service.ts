import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {RecipeService} from "../recipe-book/recipe.service";
import {Recipe} from "../recipe-book/recipe.model";
import {letProto} from "rxjs/operator/let";
import "rxjs/add/operator/map"
import {AuthService} from "../auth/auth.service";

@Injectable()
export class DataStorageService{
  constructor(private http:Http,
              private recipeService:RecipeService,
              private authService:AuthService){
  }

  storeRecipes(){
    return this.http.put(
      "https://ng-recipe-book-c4bac.firebaseio.com/recipes.json",
          this.recipeService.getRecipes()
      )
  }

  fetchRecipes(){
    const token = this.authService.getToken();
    return this.http.get(
      "https://ng-recipe-book-c4bac.firebaseio.com/recipes.json?auth="+token
    ).map(
      (response:Response)=>{
        const recipes:Recipe[] = response.json()
        for (let recipe of recipes){
          if (!recipe['ingredients']){
            recipe["ingredients"]=[]
          }
        }
        return recipes;
      }
    ).subscribe(
      (recipes:Recipe[])=>{
        this.recipeService.setRecipes(recipes);
      }
    );
  }
}
