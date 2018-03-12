import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'A test Description',
      'https://images.pexels.com/photos/691114/pexels-photo-691114.jpeg?h=350&auto=compress&cs=tinysrgb'),
    new Recipe('A Test Recipe', 'A test Description',
      'https://images.pexels.com/photos/691114/pexels-photo-691114.jpeg?h=350&auto=compress&cs=tinysrgb')

  ];
  constructor() { }

  ngOnInit() {
  }

}
