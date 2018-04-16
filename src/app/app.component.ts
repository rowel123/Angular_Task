import { Component } from '@angular/core';
import { UsersService } from './_sharedServices/users.service';
import { ProductsService } from './_sharedServices/products.service';
import { MenuService } from './_sharedServices/menu.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersService,ProductsService,MenuService]
})
export class AppComponent {
  title = 'app';
  private menuArray;

    constructor(private usersService:UsersService,private productService:ProductsService,private menuService:MenuService){
          this.menuService.getMenu().subscribe(res=>{
              if(res){
                  this.menuArray = res['menu'];
              }
          })
    }

  	ngOnInit() {

    }
}
