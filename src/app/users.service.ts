import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  usersSuggested = [{
		"name": "John",
		"id": 21,
		"email": "john@legend.com",
    "profilePic":"../assets/img/dp4.jpg",
	},
	{
		"name": "Ethan",
		"id": 22,
		"email": "ethan@mi5.com",
    "profilePic":"../assets/img/ethan.jpg",
	}
];

  private usersSuggestion = new BehaviorSubject<any>(this.usersSuggested);
  userSuggested = this.usersSuggestion.asObservable();

  constructor() { }

  changeGoal(userSuggested) {
    this.usersSuggestion.next(userSuggested);
   }
}
