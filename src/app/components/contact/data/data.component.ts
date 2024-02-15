import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetData } from 'src/app/GetData';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  // id! : number;
  posts: GetData[] = [];

  constructor(private api: ApiService, private activateR: ActivatedRoute) {
  }

  ngOnInit(): void {
    //  this.api.getPostsById(id)

    this.activateR.paramMap.subscribe((data) => {
      // const id = data.get('id');
      if (data !== null) {
        const id = data.get('id');

        if (id !== null) {
          // debugger
          this.api.getPostsById(Number(id)).subscribe((data: GetData[]) => {
            this.posts = data;
            console.log(this.posts);
          },
            (error) => { console.error("Erroer Fetching Data", error) })
        }
      }
    })
  }
}
