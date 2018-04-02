import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

@Injectable()
export class ServerService{
  constructor(public http:Http){}

  storeServers(servers: any[]){
    return this.http.post('http://localhost:5000/api/values',servers);
  }
}
