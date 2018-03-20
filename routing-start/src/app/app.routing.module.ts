import {NgModule} from "@angular/core";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {HomeComponent} from "./home/home.component";
import {ServersComponent} from "./servers/servers.component";
import {UserComponent} from "./users/user/user.component";
import {RouterModule, Routes} from "@angular/router";
import {EditServerComponent} from "./servers/edit-server/edit-server.component";
import {UsersComponent} from "./users/users.component";
import {ServerComponent} from "./servers/server/server.component";
import {provideForRootGuard} from "@angular/router/src/router_module";
import {AuthGuardService} from "./auth-guard.service";
import {CanDeactivateGuardService} from "./servers/edit-server/can-deactivate-guard.service";
import {ErrorPageComponent} from "./error-page/error-page.component";
import {ServerResolver} from "./servers/server/server-resolver";

const appRoutes: Routes = [
  {path: 'users', component: UsersComponent, children:[
      {path: ':id/:name', component: UserComponent}
    ]},
  {path: '', component: HomeComponent},
  {path: 'servers',
    // canActivate:[AuthGuardService],
    canActivateChild:[AuthGuardService],
    component: ServersComponent,
    children:[
      {path: ':id/edit', component: EditServerComponent, canDeactivate:[CanDeactivateGuardService] },
      {path: ':id', component: ServerComponent, resolve:{server:ServerResolver}}
    ]},
  // {path: 'not-found', component:PageNotFoundComponent},
  {path: 'not-found', component:ErrorPageComponent, data:{MessageChannel: 'Page not found!'}},
  {path: '**', redirectTo: '/not-found', pathMatch:'full'}
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule{

}
