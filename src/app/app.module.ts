import { ShowcaseDealsPage } from './../pages/showcase-deals/showcase-deals';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ProfilePage } from '../pages/profile/profile';
import { ShowcaseAdvertiserPage } from '../pages/showcase-advertiser/showcase-advertiser';
import { ShowcasePlace2BizzPage } from '../pages/showcase-place2-bizz/showcase-place2-bizz';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ProfilePage,
    ShowcaseDealsPage,
    ShowcaseAdvertiserPage,
    ShowcasePlace2BizzPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ProfilePage,
    ShowcaseDealsPage,
    ShowcaseAdvertiserPage,
    ShowcasePlace2BizzPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
