import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeDashboardComponent} from './home-dashboard.component';
import {DashboardHomeContextComponent} from "./components/dashboard-home-context/dashboard-home-context.component";

const routes: Routes = [
  {
    path: '', component: HomeDashboardComponent, children: [
      {path: '', redirectTo: 'context', pathMatch: 'full'},
      {path: 'context', component: DashboardHomeContextComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeDashboardRoutingModule {
}
