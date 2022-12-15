import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ShareComponent} from './share.component';
import {LoadingSpinnerCustomComponent} from "./components/loading/loading-spinner-custom/loading-spinner-custom.component";

const routes: Routes = [
  {
    path: '', component: ShareComponent, children: [
      {path: 'loading-spinner-custom', component: LoadingSpinnerCustomComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShareRoutingModule {
}
