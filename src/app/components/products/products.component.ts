import { Component } from '@angular/core';
import { Product } from 'src/app/interface/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products : Product[] = []
  constructor(private ps : ProductService){
    this.products = ps.products;
    console.log(this.products);
    
  }


}
