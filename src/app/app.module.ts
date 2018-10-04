import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { Diagnostic } from '@ionic-native/diagnostic';
import { Camera, CameraOptions } from '@ionic-native/camera';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TutorialPage } from '../pages/tuto/tuto';
import { VRPage } from '../pages/vrpage/vrpage';
import { ActPage } from '../pages/act/act';
import { FormaPage } from '../pages/forma/forma';
import { ApprentPage } from '../pages/apprent/apprent';
import { CvPage} from "../pages/cv/cv";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FileChooser} from "@ionic-native/file-chooser";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TutorialPage,
    VRPage,
    ActPage,
    FormaPage,
    ApprentPage,
    CvPage
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
    FormaPage,
    ApprentPage,
    CvPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AndroidPermissions,
    Diagnostic,
    Camera,
    HTTP,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FileChooser
  ]
})
export class AppModule {}
