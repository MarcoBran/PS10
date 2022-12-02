import { NgModule } from '@angular/core';
import { ChildrenOutletContexts, RouterModule, Routes } from '@angular/router';
import { ActivePostsComponent } from './active-posts/active-posts.component';
import { HomeComponent } from './home/home.component';
import { InactivePostsComponent } from './inactive-posts/inactive-posts.component';
import { DettaglioComponent } from './dettaglio/dettaglio/dettaglio.component';
import { UsersComponent } from './users/users/users.component';
import { UsersInfoComponent } from './usersInfo/users-info/users-info.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "active",
    component: ActivePostsComponent
  },
  {
    path: "active/false",
    component: InactivePostsComponent
  },
  {
    path: "users",
    component: UsersComponent,
    children:[{
      path:"users/info",
      component: UsersInfoComponent
  }]
  },
  {
    path: "dettaglio",
    component: DettaglioComponent
      },
      {
        path:"**",
        redirectTo: ""
      }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }