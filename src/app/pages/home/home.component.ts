import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private http: HttpClient) {}

  vote(): Observable<any> {
    let url = 'http://localhost:3000/test/vote';
    return this.http.get(url);
  }

  random(): Observable<any> {
    let url = 'http://localhost:3000/test/random';
    return this.http.get(url);
  }

  public users: any[] = [];

  callVote() {
    this.vote().subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  callRandom() {
    this.random().subscribe(
      (res) => {
        console.log(res.users);
        this.users = res.users;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
