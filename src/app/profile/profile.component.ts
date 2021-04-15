import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Emitters } from '../emitters/emitters';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  message = '';
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:3000/api/user', {withCredentials: true})
      .subscribe(
        (res:any) => {
          this.message = `Welcome, ${res.firstname}`
          Emitters.authEmitter.emit(true);
        },
        err => {
          this.message = 'You are not logged in';
          Emitters.authEmitter.emit(false);
        });
  }

}
