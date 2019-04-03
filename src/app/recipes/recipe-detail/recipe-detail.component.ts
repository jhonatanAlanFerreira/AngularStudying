import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Ingredient } from 'src/app/shared/ingredient.model';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
recipe: Recipe; //Receita selecionada (Div da direita)
id: number; // Id da receita recebida por url para ser selecionada
  constructor(private recipeService: RecipeService, private route: ActivatedRoute) { } // RecipeService contem o array com as receitas, PROVIDER:[] em Recipe.component

  addToShopping(ingredients:Ingredient[]){ 
    this.recipeService.addToShopping(ingredients);
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => { //Observable para atualizar quando outra receita for selecionada
      this.id = +params["id"];
      this.recipe = this.recipeService.getRecipeById(this.id);
    } )
  }
}
