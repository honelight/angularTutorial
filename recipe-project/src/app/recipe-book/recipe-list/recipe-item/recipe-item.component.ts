import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from "../../recipe.model";
import {RecipeService} from "../../recipe.service";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  constructor(private recipeService:RecipeService) { }


  @Input() recipeItem:Recipe;
  // @Output() recipeItemEmitter:EventEmitter<Recipe> = new EventEmitter<Recipe>();

  // onRecipeSelected(){
  //   this.recipeItemEmitter.emit(this.recipeItem);
  // }

  changeRecipe(){
    this.recipeService.currentRecipeChangeEmitter.emit(this.recipeItem);
  }

  ngOnInit() {
  }

}
