import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Page404Component } from './components/page404/page404.component';
import { ShowComponent } from './components/show/show.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "show", component: ShowComponent },
    { path: "about", component: AboutComponent },
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "**", component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
