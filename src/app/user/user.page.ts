import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) { }

  id: any;
  user: any;
  loading: boolean = true;

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.fetchUser().subscribe( res => {
      this.user = res;
      this.loading = false;
    });
  }

  fetchUser() {
    return this.http
    .get("https://jsonplaceholder.typicode.com/users/"+this.id)
    .pipe( map((res:any) => {
      return res;
    }));
  }

}
