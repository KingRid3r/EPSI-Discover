import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CvPage } from './cv';

@NgModule({
  declarations: [
    CvPage,
  ],
  imports: [
    IonicPageModule.forChild(CvPage),
  ],
})
export class CvPageModule {}
