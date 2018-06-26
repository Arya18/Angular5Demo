import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class UserProfilesService {

 usersData = [{
		"name": "Arun",
		"id": 1,
		"email": "aryanpra16dec@gmail.com",
    "profilePic":"../assets/img/arunDp.jpg",
		"friends": [{
				"name": "Deepak",
				"id": 2,
				"email": "deepakkaushal198@gmail.com"
			},
			{
				"name": "Gaurav",
				"id": 3,
				"email": "gaurav695@gmail.com",
				"profilePic":"../assets/img/arunDp.jpg",
				"friends":[{
					"name": "Akash",
					"id": 31,
					"email": "akash12@gmail.com"
				}]
			},
			{
				"name": "rahul",
				"id": 4,
				"email": "rahul134@gmail.com"
			}
		]
	},
	{
		"name": "Sumit",
		"id": 11,
		"email": "sumit65@gmail.com",
    "profilePic":"../assets/img/sumitDp.jpg",
		"friends": [{
				"name": "Parihar",
				"id": 2,
				"email": "Parihar123@gmail.com"
			},
			{
				"name": "KApil",
				"id": 3,
				"email": "kapil695@gmail.com"
			},
			{
				"name": "Shivam",
				"id": 4,
				"email": "shivam134@gmail.com"
			}
		]
	}
];
  private users = new BehaviorSubject<any>(this.usersData);
  user = this.users.asObservable();

  constructor() { }

  changeGoal(user){
    this.users.next(user);
  }
}
