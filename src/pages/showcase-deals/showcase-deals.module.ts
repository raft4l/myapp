import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShowcaseDealsPage } from './showcase-deals';

@NgModule({
  declarations: [
    ShowcaseDealsPage,
  ],
  imports: [
    IonicPageModule.forChild(ShowcaseDealsPage),
  ],
})
export class ShowcaseDealsPageModule {}
