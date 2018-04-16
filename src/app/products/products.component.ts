import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../_sharedServices/products.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  private productData;
  private productFields;
  constructor(private productService:ProductsService) {
      this.fetchConfig();
   }

  ngOnInit() {
  }

  fetchConfig(){
    this.productService.getProductsConfig().subscribe(res=>{
        if(res){
          this.productFields = res['columndFields'];
          this.fetchData();
        }
    });
  }

  fetchData(){
    this.productService.getAllProducts().subscribe(res=>{
      if(res){
          this.productData = res;
      }
    })
  }


}
