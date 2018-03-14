import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  constructor() { }

  @Output() addIngredientEmitter:EventEmitter<Ingredient> = new EventEmitter<Ingredient>()
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  // addIngredient(name:HTMLInputElement, amount:HTMLInputElement){
  //   this.addIngredientEmitter.emit(new Ingredient(name.value, Number(amount.value)));
  // }

  addIngredient(){
    this.addIngredientEmitter.emit(
      new Ingredient(
        this.nameInputRef.nativeElement.value
      , Number(this.amountInputRef.nativeElement.value)));
  }

  ngOnInit() {
  }

}
