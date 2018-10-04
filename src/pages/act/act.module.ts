import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ActPage } from './act';

@NgModule({
  declarations: [
    ActPage,
  ],
  imports: [
    IonicPageModule.forChild(ActPage),
  ],
})
export class ActPageModule {}
