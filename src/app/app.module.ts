import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { Diagnostic } from '@ionic-native/diagnostic';
import { Camera } from '@ionic-native/camera';
import { Geolocation } from '@ionic-native/geolocation';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TutorialPage } from '../pages/tuto/tuto';
import { VRPage } from '../pages/vrpage/vrpage';
import { ActPage } from '../pages/act/act';
import { DownMarkPage } from '../pages/down-mark/down-mark';
import { FormaPage } from '../pages/forma/forma';
import { ApprentPage } from '../pages/apprent/apprent';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TutorialPage,
    VRPage,
    ActPage,
    DownMarkPage,
    FormaPage,
    ApprentPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TutorialPage,
    VRPage,
    ActPage,
    DownMarkPage,
    FormaPage,
    ApprentPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AndroidPermissions,
    Diagnostic,
    Camera,
    HTTP,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
