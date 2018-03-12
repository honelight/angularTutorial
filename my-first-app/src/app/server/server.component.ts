///<reference path="../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import {Component} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    .online{
      color: white;
    }
  `]
})

export class ServerComponent {
  serverId = 10;
  serverStatus = 'offline';
  serverName = 'default';


  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getColor(): string {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

  getServerStatus() {
    return this.serverStatus;
  }
}
