import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
user: User;
repos: any;
username = 'Ckhajira';
searchname ="tetris"

  constructor(private http: HttpClient) { 
    this.user =new User('',0,'');
    this.http = http;
  }
}
