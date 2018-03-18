import {LoggingService} from "./logging.service";
import {EventEmitter, Injectable} from "@angular/core";

@Injectable()
export class AccountsService{

  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  constructor(private loggingService:LoggingService){}

  statusUpdated = new EventEmitter<string>();

  addAcount(name: string,  status: string){
    this.accounts.push({name: name,  status:status});
    this.loggingService.logStatus(status);
  }

  updateStatus(id: number,  status: string){
    this.accounts[id].status = status;
    this.loggingService.logStatus(status);
  }
}
