import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { UserProfilesService } from '../user-profiles.service';
import { UsersService } from '../users.service';
import { Router, ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users = [];
  dataSuggest = []; 
  usersDetails = false;
  userProfile : any;
  friendprofile : any;
  constructor(private route: ActivatedRoute, private _data: UserProfilesService, private router: Router, private _suggestedData: UsersService) { }

  ngOnInit() {
    this._data.user.subscribe(res => this.users = res);
    this._suggestedData.userSuggested.subscribe(res => this.dataSuggest = res);
    // console.log(this.users);
    this._data.changeGoal(this.users);
    this._suggestedData.changeGoal(this.dataSuggest);
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
    // console.log(this.userProfile.friends[id]);
    for (var key in this.userProfile.friends){
      console.log(this.userProfile.friends[key].id);
      if(this.userProfile.friends[key].id == id){
        this.userProfile = this.userProfile.friends[key];
        console.log(this.userProfile);
      }
    }
  }
  }
}
