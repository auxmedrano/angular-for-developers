import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { AnotherPageComponent } from './another-page/another-page.component';
import { GraphsComponent } from './graphs/graphs.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroesListComponent } from '../component/heroes-list/heroes-list.component';
import { LoginComponent } from './auth/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AnotherPageComponent,
    GraphsComponent,
    HeroesComponent,
    HeroesListComponent,
    LoginComponent,
  ],
  imports: [ReactiveFormsModule, CommonModule, PagesRoutingModule],
})
export class PagesModule {}
