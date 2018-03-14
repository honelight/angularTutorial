import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe 1', 'A test Description 1',
      'https://images.pexels.com/photos/691114/pexels-photo-691114.jpeg?h=350&auto=compress&cs=tinysrgb'),
    new Recipe('A Test Recipe 2', 'A test Description 2',
      'https://images.pexels.com/photos/691114/pexels-photo-691114.jpeg?h=350&auto=compress&cs=tinysrgb')
  ];
  constructor() { }

  @Output() recipeListEmitter:EventEmitter<Recipe> = new EventEmitter<Recipe>();

  onListEventEmit(recipe:Recipe){
    this.recipeListEmitter.emit(recipe);
  }

  ngOnInit() {
  }

}
