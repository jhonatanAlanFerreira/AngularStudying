import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";

export class ShoppingService{
newAdded = new EventEmitter<void>(); //Emite sinal para os components serem atualizados

ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

   getIngredients(){
    return this.ingredients.slice();
  }
  
   newIngredient(newIngredient:Ingredient){
    this.ingredients.push(newIngredient)
    this.newAdded.emit(); 
    
  }

  newIngredients(ingredients:Ingredient[]){
    this.ingredients.push(...ingredients);
    this.newAdded.emit();
  }

}