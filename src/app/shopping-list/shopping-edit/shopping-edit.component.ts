import {
  Component,
  OnInit
} from '@angular/core';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  
  constructor(private shoppingService: ShoppingService) { }

  newIngredient(name, amount){
    this.shoppingService.newIngredient({name:name,amount:amount});
  }

  ngOnInit() {
  }

}
