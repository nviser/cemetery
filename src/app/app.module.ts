import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { MapPage } from '../pages/map/map';
import { SettingsPage } from '../pages/settings/settings';
import { HolidaysPage } from '../pages/holidays/holidays';
import { PersonPage } from '../pages/person/person';
import { FeastPage } from '../pages/feast/feast';
import { ListPage } from '../pages/list/list';
import { CalendarPage } from '../pages/calendar/calendar';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

/* import { CalendarModule } from 'ionic3-calendar'; */

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MapPage,
    SettingsPage,
    HolidaysPage,
    PersonPage,
    FeastPage,
    ListPage,
    CalendarPage
  ],
  imports: [
    BrowserModule,
    /* CalendarModule, */
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MapPage,
    SettingsPage,
    HolidaysPage,
    PersonPage,
    FeastPage,
    ListPage,
    CalendarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
