import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import {ActivatedRoute, CanDeactivate, Params, Router} from "@angular/router";
import {RouterConfigLoader} from "@angular/router/src/router_config_loader";
import {CanComponentDeactivate} from "./can-deactivate-guard.service";
import {Observable} from "rxjs/Observable";
import {PLATFORM_SERVER_ID} from "@angular/common/src/platform_id";

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {

  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  changesSaved = false;
  serverId = 0;

  constructor(private serversService: ServersService,
              private route:ActivatedRoute,
              private router:Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(
      (queryParams : Params)=>{
        this.allowEdit = queryParams['allowEdit'] === '1';
      }
    );
    this.route.fragment.subscribe();
    this.route.queryParams.subscribe(
      (params: Params)=>{
        this.serverId = Number(params['id']);
      }
    );
    this.serverId = Number(this.route.snapshot.params['id']);
    this.server = this.serversService.getServer(this.serverId);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.changesSaved = true;
    this.router.navigate(['../'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
  }

  canDeactivate() : Observable<boolean> | Promise<boolean> | boolean{
    console.log("there");
    if (!this.allowEdit){
      return true;
    }
    if ((this.serverName !== this.server.name || this.serverStatus !== this.server.status) && !this.changesSaved){
      return confirm('Do you want ot discard the changes?');
    }
    else{
      return true;
    }
  }


}
