import {Injectable} from "@angular/core";

@Injectable()
export class CounterService{
  activeUserCount:{name:string,  activeCount:number, inactiveCount:number}[] = [];
  inactiveUserCount:{name:string, activeCount:number, inactiveCount:number}[] = [];

  setToInactive(id: number) {
    var activeCountUser = this.activeUserCount[id];
    console.log(activeCountUser.name+" "+activeCountUser.activeCount+" "+(activeCountUser.inactiveCount+1));
    this.inactiveUserCount.push({name:activeCountUser.name, activeCount: activeCountUser.activeCount, inactiveCount: activeCountUser.inactiveCount+1});
    this.activeUserCount.splice(id, 1);
  }

  setToActive(id: number) {
    var inactiveCountUser = this.inactiveUserCount[id];
    console.log(inactiveCountUser.name+" "+(inactiveCountUser.activeCount+1)+" "+inactiveCountUser.inactiveCount);
    this.activeUserCount.push({name:inactiveCountUser.name, activeCount: inactiveCountUser.activeCount+1, inactiveCount: inactiveCountUser.inactiveCount});
    this.inactiveUserCount.splice(id, 1);
  }

}
