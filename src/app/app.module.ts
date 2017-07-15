import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {Router, NavigationStart, NavigationEnd, RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppComponent} from './app.component';
import {TopBarComponent} from './components/top-bar/top-bar.component';
import {MenuLeftComponent} from './components/menu-left/menu-left.component';
import {MenuRightComponent} from './components/menu-right/menu-right.component';
import {FooterComponent} from './components/footer/footer.component';
import {StructureModule} from './structure/structure.module';
import {GeneralModule} from './general/general.module';
import {AuthModule} from './auth/auth.module';
import {AppRoutingModule} from './app-routing.module';
//auth service
import {AuthService} from './auth/auth.service';

declare var NProgress: any;

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    MenuLeftComponent,
    MenuRightComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    StructureModule,
    GeneralModule,
    AuthModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  // constructor(private router: Router) {
  //   router.events.subscribe((event) => {
  //
  //     if (event instanceof NavigationStart) {
  //       NProgress.start();
  //     }
  //
  //     if (event instanceof NavigationEnd) {
  //       setTimeout(function () {
  //         NProgress.done();
  //       }, 200);
  //     }
  //
  //   });
  // }
}
