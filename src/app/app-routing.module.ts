import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { MusicCollectionComponent } from './components/music-collection/music-collection.component';
import { IntroTextComponent } from './components/main-page/intro-text/intro-text.component';
import { SudesteComponent } from './components/music-collection/sudeste/sudeste.component';
import { NorteComponent } from './components/music-collection/norte/norte.component';
import { CentroOesteComponent } from './components/music-collection/centro-oeste/centro-oeste.component';
import { NordesteComponent } from './components/music-collection/nordeste/nordeste.component';
import { SulComponent } from './components/music-collection/sul/sul.component';
import { PhotoCollectionComponent } from './components/photo-collection/photo-collection.component';
import { DirectorsBoardComponent } from './components/directors-board/directors-board.component';
import { DecorationsComponent } from './components/decorations/decorations.component';
import { NewsComponent } from './components/news/news.component';
import { HistoryComponent } from './components/history/history.component';
import { AgreementsComponent } from './components/agreements/agreements.component';

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
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
    path: 'nossa-historia', 
    component: HistoryComponent,
  },
  { 
    path: 'diretoria', 
    component: DirectorsBoardComponent,
  },
  { 
    path: 'acervo-musical', 
    component: MusicCollectionComponent,
  },
  { 
    path: 'acervo-musical/norte', 
    component: NorteComponent,
  },
  { 
    path: 'acervo-musical/nordeste', 
    component: NordesteComponent,
  },
  { 
    path: 'acervo-musical/centro-oeste', 
    component: CentroOesteComponent,
  },
  { 
    path: 'acervo-musical/sudeste', 
    component: SudesteComponent,
  },
  { 
    path: 'acervo-musical/sul', 
    component: SulComponent,
  },
  { 
    path: 'acervo-fotografico', 
    component: PhotoCollectionComponent,
  },
  { 
    path: 'condecoracoes', 
    component: DecorationsComponent,
  },
  { 
    path: 'noticias', 
    component: NewsComponent,
  },
  { 
    path: 'parcerias', 
    component: AgreementsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
