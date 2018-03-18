import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  constructor(private recipeService:RecipeService) { }

  // @Output() recipeListEmitter:EventEmitter<Recipe> = new EventEmitter<Recipe>();
  //
  // onListEventEmit(recipe:Recipe){
  //   this.recipeListEmitter.emit(recipe);
  // }

  recipes:Recipe[] = [];

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

}
