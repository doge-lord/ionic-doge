import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IonicDogeComponentsModule } from '../../components/ionic-doge-components.module';

import { FormsPage } from './forms';

@NgModule({
  declarations: [
    FormsPage,
  ],
  imports: [
    IonicDogeComponentsModule,
    IonicPageModule.forChild(FormsPage),
  ],
  exports: [
    FormsPage
  ]
})
export class FormsPageModule {}
