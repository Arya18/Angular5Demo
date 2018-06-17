import { Component, OnInit } from '@angular/core';
import { UserProfilesService } from '../user-profiles.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users = [];
  constructor(private _data: UserProfilesService, private router: Router) { }

  ngOnInit() {
    this._data.user.subscribe(res => this.users = res);
    this._data.changeGoal(this.users);
  }

  showUserProfile(id){
    console.log(id);
    this.router.navigate(['users/:id']);
  }

}
