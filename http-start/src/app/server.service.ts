import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import "rxjs/Rx";

@Injectable()
export class ServerService{
  constructor(public http:Http){}

  storeServers(servers: any[]){
    return this.http.post('http://localhost:5000/api/Values/AddServers',servers);
  }

  getServers(){
     return this.http.get('http://localhost:5000/api/Values')
      .map(
        (response:Response)=>{
          const data = response.json();
          return data;
        }
      );
  }

}
