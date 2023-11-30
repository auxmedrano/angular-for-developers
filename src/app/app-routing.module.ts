import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnotherPageComponent } from './pages/another-page/another-page.component';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { LoginComponent } from './pages/auth/login/login.component';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./pages/pages.module').then((m) => m.PagesModule),
  },
  {
    path: 'other',
    component: AnotherPageComponent,
  },
  {
    path: 'heroes',
    component: HeroesComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
