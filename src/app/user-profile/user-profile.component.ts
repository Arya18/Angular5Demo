import { Component, OnInit } from '@angular/core';
import { UserProfilesService } from '../user-profiles.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  users = [];
  constructor(private _data: UserProfilesService) { }

  ngOnInit() {
    this._data.user.subscribe(res => this.users = res);
    this._data.changeGoal(this.users);
  }

}
