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
    "profilePic":"../assets/img/dp.webp",
		"friends": [{
				"name": "Deepak",
				"id": 2,
				"email": "deepakkaushal198@gmail.com",
				"profilePic":"../assets/img/dp6.jpg",
				"friends": [
					{

					}
				]
			},
			{
				"name": "Gaurav",
				"id": 3,
				"email": "gaurav695@gmail.com",
				"profilePic":"../assets/img/dp2.png",
				"friends": [
					{
						
					}
				]
			},
			{
				"name": "rahul",
				"id": 4,
				"email": "rahul134@gmail.com",
				"profilePic":"../assets/img/dp3.jpg",
				"friends": [
					{
						
					}
				]
			}
		]
	},
	{
		"name": "Sumit",
		"id": 11,
		"email": "sumit65@gmail.com",
    "profilePic":"../assets/img/dp1.jpeg",
		"friends": [{
				"name": "Parihar",
				"id": 2,
				"email": "Parihar123@gmail.com",
				"profilePic":"../assets/img/dp8.jpg",
			},
			{
				"name": "KApil",
				"id": 3,
				"email": "kapil695@gmail.com",
				"profilePic":"../assets/img/dp5.jpg",
			},
			{
				"name": "Shivam",
				"id": 4,
				"email": "shivam134@gmail.com",
				"profilePic":"../assets/img/dp7.jpg",
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
