import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateBugComponent} from "./components/dashboard/bug/create-bug/create-bug.component";
import {ListBugComponent} from "./components/dashboard/bug/list-bug/list-bug.component";
import {CreateDevComponent} from "./components/dashboard/developer/create-dev/create-dev.component";
import {ListDevComponent} from "./components/dashboard/developer/list-dev/list-dev.component";
import {CreateAppComponent} from "./components/dashboard/application/create-app/create-app.component";
import {ListAppComponent} from "./components/dashboard/application/list-app/list-app.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {SignInComponent} from "./components/dashboard/auth/sign-in/sign-in.component";
import {SignUpComponent} from "./components/dashboard/auth/sign-up/sign-up.component";
import {SettingComponent} from "./components/dashboard/setting/setting.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/login"
  },
  {
    path: "login",
    component: SignInComponent
  },
  {
    path: "register",
    component: SignUpComponent
  },
  {
    path: "dashboard",
    children: [
      {
        path: "",
        component: DashboardComponent,
      },
      {
        path: "apps",
        children: [
          {
            path: "",
            component: ListAppComponent
          },
          {
            path: "create",
            component: CreateAppComponent
          },
          {
            path: ":id/edite",
            component: CreateAppComponent
          },
        ]
      },
      {
        path: "devs",
        children: [
          {
            path: "",
            component: ListDevComponent
          },
          {
            path: "create",
            component: CreateDevComponent
          },
          {
            path: ":id/edite",
            component: CreateDevComponent
          },
        ]
      },
      {
        path: "bugs",
        children: [
          {
            path: "",
            component: ListBugComponent
          },
          {
            path: "create",
            component: CreateBugComponent
          },
        ]
      },
      {
        path: "settings",
        component: SettingComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
