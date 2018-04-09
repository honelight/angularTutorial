import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";

@Injectable()
export class DataStorageService {
  constructor(private httpClient: HttpClient,
              private recipeService: RecipeService,
              private authService: AuthService) {
  }

  storeRecipes() {
    const token = this.authService.getToken();
    // const header = new HttpHeaders().set("Authorization","Bearer afdklasflaldf");

    return this.httpClient.put(
      'https://ng-recipe-book-c4bac.firebaseio.com/recipes.json',
      this.recipeService.getRecipes(),
      {observe:'events',
      params: new HttpParams().set('auth',token)}
    )
  }

  getRecipes() {
    const token = this.authService.getToken();

    // this.httpClient.get<Recipe[]>('https://ng-recipe-book-3adbb.firebaseio.com/recipes.json?auth=' + token)
    this.httpClient.get('https://ng-recipe-book-c4bac.firebaseio.com/recipes.json?auth=' + token,
      {observe:'response',
      responseType:'text'}
      )
      .map(
        (recipes) => {
          // for (let recipe of recipes) {
          //   if (!recipe['ingredients']) {
          //     recipe['ingredients'] = [];
          //   }
          // }
          console.log(recipes);
          return [];
        }
      )
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      );
  }
}
