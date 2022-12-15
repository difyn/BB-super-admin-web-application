import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ShareRoutingModule} from './share-routing.module';
import {ShareComponent} from './share.component';
import {LoadingSpinnerCustomComponent} from './components/loading/loading-spinner-custom/loading-spinner-custom.component';

@NgModule({
  declarations: [
    ShareComponent,
    LoadingSpinnerCustomComponent
  ],
  exports: [
    LoadingSpinnerCustomComponent
  ],
  imports: [
    CommonModule,
    ShareRoutingModule
  ]
})
export class ShareModule {
}
