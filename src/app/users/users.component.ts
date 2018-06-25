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

  showUserProfile(id, usr){
    this.usersDetails = true;
    if(usr == "user"){
    for (var key in this.users){
      if(this.users[key].id == id){
        this.userProfile = this.users[key];
        console.log(this.userProfile);
      }
    }
  }
  else if(usr == "friend"){
    console.log(this.userProfile.friends[id]);
    console.log();
    for (var key in this.userProfile){
    //  console.log(this.userProfile.friends)
    }
  }
  }
}
