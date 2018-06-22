import { Component, OnInit } from '@angular/core';
import { DataService } from '../common/data.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUsersComponent implements OnInit {

  constructor(private dataService : DataService ) { }

  ngOnInit() {
    this.dataService.getUserDetail().subscribe(
      data=>{
        console.log(data)
      },
      err=>{
        console.log(err)
      }
    )
  }

}
