import {Injectable, OnInit} from "@angular/core";
import {CounterService} from "./counter.service";

@Injectable()
export class UserService{
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  constructor(private counterService:CounterService){
  }

  onInit(){
    for(let activeUser of this.activeUsers ){
      this.counterService.activeUserCount.push({name:activeUser, activeCount:0, inactiveCount:0});
    }
    for(let inactiveUser of this.inactiveUsers){
      this.counterService.inactiveUserCount.push({name:inactiveUser, activeCount:0, inactiveCount:0});
    }
  }

  setToInactive(id: number) {
    this.counterService.setToInactive(id);
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
  }

  setToActive(id: number) {
    this.counterService.setToActive(id);
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
  }
}
