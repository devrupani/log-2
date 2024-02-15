import { Component, NgIterable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { find } from 'rxjs';
import { GetData } from 'src/app/GetData';
import { Product } from 'src/app/interface/product';
import { ApiService } from 'src/app/services/api.service';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  posts: GetData[] = [];
  likedProducts: Product[] = [];

  constructor(private ps: ProductService, private apiservice: ApiService, private route: Router) {
    this.likedProducts = ps.products.filter((x) => {
      return x.p_liked === true;
    })


    // console.log(this.likedProducts)
  }


  ngOnInit() {
    this.apiservice.getPosts().subscribe((x: GetData[]) => {
      this.posts = x;
      console.log(this.posts);
      
    },
      (errpr) => {
        console.error("Erroer Fetching Data", errpr)
      }
    );
  }

  getDetails(id: number) {
    this.route.navigate(['/data/' + id])

  }

  deleteDetails(id: number) {
    // console.log("========================");
    // this.apiservice.getDeletebyId(id).subscribe((x:GetData[]) => {
      
      
    // })
  }



}
