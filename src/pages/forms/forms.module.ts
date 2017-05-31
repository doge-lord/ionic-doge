import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IonicDogeModule } from '../../ionic-doge.module';

import { FormsPage } from './forms';

@NgModule({
  declarations: [
    FormsPage,
  ],
  imports: [
    IonicDogeModule,
    IonicPageModule.forChild(FormsPage),
  ],
  exports: [
    FormsPage
  ]
})
export class FormsPageModule {}
