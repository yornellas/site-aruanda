import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { MusicCollectionComponent } from './components/music-collection/music-collection.component';
import { IntroTextComponent } from './components/main-page/intro-text/intro-text.component';
import { SudesteComponent } from './components/music-collection/sudeste/sudeste.component';
import { NorteComponent } from './components/music-collection/norte/norte.component';
import { CentroOesteComponent } from './components/music-collection/centro-oeste/centro-oeste.component';

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};

const routes: Routes = [
  { path: '', redirectTo: '/pagina-inicial', pathMatch: 'full' },
  { 
    path: 'pagina-inicial', 
    component: MainPageComponent,
    children: [
      {
        path: 'intro',
        component: IntroTextComponent
      }
    ]
  },
  { 
    path: 'acervo-musical', 
    component: MusicCollectionComponent,
  },
  { 
    path: 'acervo-musical/sudeste', 
    component: SudesteComponent,
  },
  { 
    path: 'acervo-musical/norte', 
    component: NorteComponent,
  },
  { 
    path: 'acervo-musical/centro-oeste', 
    component: CentroOesteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
