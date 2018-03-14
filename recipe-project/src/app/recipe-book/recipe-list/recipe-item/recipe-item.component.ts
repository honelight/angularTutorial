import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from "../../recipe.model";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  constructor() { }


  @Input() recipeItem:Recipe;
  @Output() recipeItemEmitter:EventEmitter<Recipe> = new EventEmitter<Recipe>();

  onRecipeSelected(){
    this.recipeItemEmitter.emit(this.recipeItem);
  }

  ngOnInit() {
  }

}
