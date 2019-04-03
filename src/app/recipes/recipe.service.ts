import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { ShoppingService } from '../shopping-list/shopping.service';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>(); // Usado para atualizar os components por SUBSCRIBE 
    
    constructor(private shoppingServices:ShoppingService){}

    private recipes: Recipe[] = [
        new Recipe('Schnitzel', 'Um Schnitzel super saboroso', 'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG', [new Ingredient("Meat",1),new Ingredient("Batatas Fritas",20)]),
        new Recipe('Big Fat Burger', 'Um Hamburger bem grande', 'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',[new Ingredient("Pães",2), new Ingredient("Meat",1)])
      ];

       getRecipe(){
          return this.recipes.slice();
      }

      getRecipeById(index:number){
          return this.recipes[index];
              }

    addToShopping(ingredients:Ingredient[]){  
        this.shoppingServices.newIngredients(ingredients);
    }
}