import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {DashboardModule} from './view/dashboard/dashboard.module';
import {LoginModule} from './view/login/login.module';
import { MenuComponent } from './component/menu/menu.component';
import { MenuItemComponent } from './component/menu/menu-item/menu-item.component';

@NgModule({
    declarations: [
        AppComponent,
        MenuComponent,
        MenuItemComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        DashboardModule,
        LoginModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
