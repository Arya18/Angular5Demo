import { Component, OnInit } from '@angular/core';
import { UserProfilesService } from '../user-profiles.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  users = [];
  constructor(private _data: UserProfilesService, private route: ActivatedRoute, private _router: Router) {
    console.log(this._router.url);
   }

  ngOnInit() {
    this._data.user.subscribe(res => this.users = res);
      //  console.log(this.users);
    this._data.changeGoal(this.users);
  }

}
