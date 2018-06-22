import { Component, OnInit } from '@angular/core';
import { User } from '../common/user.model';
import { DataService } from '../common/data.service';
import { Router } from '@angular/router';
import { tick } from '@angular/core/src/render3';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  step:string
  userObject:User
  constructor( private dataService : DataService, private route: Router)
  {

  }

  ngOnInit() {
    this.step="1"
    this.userObject= new User;
    }

    moveToStep2(user){
      console.log(user)
      this.step = "2"
    }

  submitForm(user){
    console.log(this.userObject)
    this.dataService.addUser(this.userObject)
      .subscribe(data => {
        console.log(data)
        this.route.navigate(["/listUser"]);
      },
    err=>{
      console.log("error",err)
    })
  }
}