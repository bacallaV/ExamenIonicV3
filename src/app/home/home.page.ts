import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private http: HttpClient,
  ) {}

  users: any = [];
  loading: boolean = true;

  ngOnInit() {
    this.fetchUsers().subscribe( res => {
      this.users = res;
      this.loading = false;
    });
  }

  fetchUsers() {
    return this.http
    .get("https://jsonplaceholder.typicode.com/users")
    .pipe( map((res:any) => {
      return res;
    }));
  }

}
