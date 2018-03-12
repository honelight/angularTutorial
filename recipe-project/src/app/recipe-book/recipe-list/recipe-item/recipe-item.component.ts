import { Component, OnInit } from '@angular/core';
import {RecipeDetailComponent} from "../../recipe-detail/recipe-detail.component";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  constructor() { }

  recipeName: string;
  recipeDetail: RecipeDetailComponent;


  ngOnInit() {
  }

}
