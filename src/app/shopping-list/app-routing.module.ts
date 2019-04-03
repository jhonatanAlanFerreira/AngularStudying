import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from '../recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list.component';
import { RecipeStartComponent } from '../recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from '../recipes/recipe-detail/recipe-detail.component';

const appRoutes: Routes = [
    { path: "", redirectTo: "/recipes", pathMatch: "full" }, //Pagina inicial
    { path: "recipes", component: RecipesComponent, children: [ //Receita selecionada pela barra de navegação
        { path: "", component: RecipeStartComponent }, // Nem uma receita selecionada para detalhes
        { path: ":id", component: RecipeDetailComponent } //Id da receita selecionada para detalhe
    ] },
    { path: "shopping-list", component: ShoppingListComponent } // Lista de compras selecionada pela barra de navegação
];
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule{

}