import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interface/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {


  productUserSel! : number;
  product! : Product | undefined ;
  constructor(private ar : ActivatedRoute, private ps : ProductService){

  }

  ngOnInit(): void {
    const productId = this.ar.snapshot.paramMap.get('item');
    console.log(productId);

    if(productId!==null){
      this.productUserSel = +productId;
    }
    this.product = this.ps.products.find((x)=>{return x.id==this.productUserSel})
    console.log(this.product);
    
    
  }
}
