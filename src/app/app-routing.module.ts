import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {UsersComponent} from './users/users.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path:"about",
    component: AboutComponent
  },
  {
    path:"users",
    component: UsersComponent
  },
  {
    path:"users/:id",
    component: UserProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
