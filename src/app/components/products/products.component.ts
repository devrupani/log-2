import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { Product } from 'src/app/interface/product';
import { User } from 'src/app/interface/user';
import { ProductService } from 'src/app/services/product.service';
import { UserListService } from 'src/app/services/user-list.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  showLoader: boolean = true;

  toggle = new EventEmitter<boolean>();
  buttonStates: { [key: number]: boolean } = {};

  products: Product[] = []
  users: User[] = []
  role!: string;

  constructor(private ps: ProductService, private rs: Router, private userlist: UserListService) {
    this.users = userlist.users;
  }

  ngOnInit(): void {
    this.products = this.ps.products;
    // console.log(this.products);
  }

  seeItem(id: number) {
    this.products.find((x) => {
      if (x.id === id) {
        this.rs.navigate(['products/' + id]);
      }
    })
  }

  moveToFav(productId: number) {
    this.ps.products.find((x) => {
      if (x.id === productId)
        x.p_liked = !x.p_liked;
    })
  }
}
