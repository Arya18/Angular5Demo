import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  goalsData = ['Coding', 'SkyDiving'];
  private goals = new BehaviorSubject<any>(this.goalsData);
  goal = this.goals.asObservable();
  
  constructor() { }

  changeGoal(goal){
    this.goals.next(goal);
  }
}
