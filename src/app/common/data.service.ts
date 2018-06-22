import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  addUser(item){
    return this.http.post("https://nh9.herokuapp.com/saveUser",item)
  }

  getUserDetail()
  {
    return this.http.get("https://nh9.herokuapp.com/getUserList")
  }
}
