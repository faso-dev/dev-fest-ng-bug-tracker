import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ListAppComponent} from './components/dashboard/application/list-app/list-app.component';
import {CreateAppComponent} from './components/dashboard/application/create-app/create-app.component';
import {CreateDevComponent} from './components/dashboard/developer/create-dev/create-dev.component';
import {ListDevComponent} from './components/dashboard/developer/list-dev/list-dev.component';
import {ListBugComponent} from './components/dashboard/bug/list-bug/list-bug.component';
import {CreateBugComponent} from './components/dashboard/bug/create-bug/create-bug.component';
import {HeaderComponent} from "./components/dashboard/_partials/header/header.component";
import {SidebarComponent} from "./components/dashboard/_partials/sidebar/sidebar.component";
import {FooterComponent} from "./components/dashboard/_partials/footer/footer.component";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignInComponent } from './components/dashboard/auth/sign-in/sign-in.component';
import { SignUpComponent } from './components/dashboard/auth/sign-up/sign-up.component';
import { SettingComponent } from './components/dashboard/setting/setting.component';

@NgModule({
    declarations: [
        AppComponent,
        ListAppComponent,
        CreateAppComponent,
        CreateDevComponent,
        ListDevComponent,
        ListBugComponent,
        CreateBugComponent,
        HeaderComponent,
        SidebarComponent,
        FooterComponent,
        DashboardComponent,
        SignInComponent,
        SignUpComponent,
        SettingComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
