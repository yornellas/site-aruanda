import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { MainPageComponent } from './components/main-page/main-page.component';

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};

const routes: Routes = [
  { 
    path: 'pagina-inicial', 
    component: MainPageComponent,
    children: [
      {
        path: 'sobre',
        component: AboutUsComponent
      }
    ]
  },
  { path: '', redirectTo: '/pagina-inicial', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
