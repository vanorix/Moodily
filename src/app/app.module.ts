import { CalendarPageModule } from './../pages/calendar/calendar.module';
import { MoodPage } from './../pages/mood/mood';
import { CalendarPage } from './../pages/calendar/calendar';
import { GoalsPage } from './../pages/goals/goals';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {TranslateModule, TranslateStaticLoader, TranslateLoader} from 'ng2-translate';

import { DbProvider } from '../providers/db/db'

import {Http, HttpModule} from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';
import { TodayPage } from '../pages/today/today';

import {TooltipModule} from "ngx-tooltip";



// import {module} from '@angular/animations'


export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, './assets/i18n', '.json');
}


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    GoalsPage,
    // CalendarPage,
    TodayPage,
    MoodPage,
    CalendarPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: (createTranslateLoader),
            deps: [Http]
      }),                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
    IonicStorageModule.forRoot(),
    TooltipModule
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    GoalsPage,
    CalendarPage,
    TodayPage,
    MoodPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DbProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
