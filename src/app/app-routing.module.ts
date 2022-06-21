import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayGradientComponent } from './components/display-gradient/display-gradient.component';
import { DisplaySolidComponent } from './components/display-solid/display-solid.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { TutorialComponent } from './pages/tutorial/tutorial.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: TutorialComponent },
  { path: 'home/:color', component: HomeComponent, children: [
    { path: 'display-solid', component: DisplaySolidComponent },
    { path: 'display-gradient', component: DisplayGradientComponent }
  ] },
  { path: 'list', component: ListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
