import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GraphsComponent } from './graphs/graphs.component';

const rutas: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [{ path: 'graphs', component: GraphsComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(rutas)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
