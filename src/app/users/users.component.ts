import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { UserProfilesService } from '../user-profiles.service';
import { Router, ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users = [];
  usersDetails = false;
  userProfile = [];
  constructor(private route: ActivatedRoute, private _data: UserProfilesService, private router: Router) { }

  ngOnInit() {
    this._data.user.subscribe(res => this.users = res);
    // console.log(this.users);
    this._data.changeGoal(this.users);
  }

  showUserProfile(id){
    this.usersDetails = true;
    for (var key in this.users){
      if(this.users[key].id == id){
        this.userProfile = this.users[key];
        console.log(this.userProfile);
      }
    }
  }
}
