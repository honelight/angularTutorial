import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  templateUrl: 'servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreated = 'server is not created';
  serverName = 'Test';
  serverIsCreated = false;
  servers = ['TestServer', 'TestServer2'];

  constructor() {
    setTimeout(() => {this.allowNewServer = true; } , 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverIsCreated = true;
    this.servers.push(this.serverName);
    this.serverCreated = 'Server is created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
