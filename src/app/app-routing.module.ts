import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { ListUsersComponent } from './list-user/list-user.component';

const routes: Routes = [
  {    path: 'addUser', component:AddUserComponent  },
  {    path: 'listUser', component: ListUsersComponent},
  {    path: '', redirectTo: "/addUser",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
