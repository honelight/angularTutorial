import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "./recipe.model";
import {RecipeService} from "./recipe.service";

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css'],
  providers:[RecipeService]
})
export class RecipeBookComponent implements OnInit {

  constructor(){}

  // constructor(private recipeService:RecipeService) {
  // }

  // onRecipeSelected(recipe:Recipe){
  //   this.currentRecipe=recipe;
  // }

  ngOnInit() {
    // this.recipeService.currentRecipeChangeEmitter.subscribe(
    //   (recipe:Recipe)=>{
    //     this.currentRecipe = recipe;
    //   }
    // )
  }
}
