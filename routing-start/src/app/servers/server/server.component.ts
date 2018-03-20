import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import {ActivatedRoute, Data, Params, Route, Router} from "@angular/router";
import {relative} from "path";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};


  constructor(private serversService: ServersService,
              private router: ActivatedRoute,
              private routing: Router) {
  }

  ngOnInit() {
    // const id = this.router.snapshot.params['id'];
    //
    // this.router.params.subscribe(
    //   (params: Params) => {
    //     this.server = this.serversService.getServer(Number(params['id']));
    //   }
    // );

    this.router.data.subscribe(
      (data:Data)=>{
        this.server = data['server'];
      }
    );
  }

  onEditServer(){
    this.routing.navigate(['edit'],{relativeTo:this.router, queryParamsHandling: 'preserve'});
  }

}
