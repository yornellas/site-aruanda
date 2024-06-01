import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainPageComponent } from './components/main-page/main-page.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { FormsModule } from '@angular/forms';
import { MusicCollectionComponent } from './components/music-collection/music-collection.component';
import { IntroTextComponent } from './components/main-page/intro-text/intro-text.component';
import { SudesteComponent } from './components/music-collection/sudeste/sudeste.component';
import { PdfModalComponent } from './shared/pdf-modal/pdf-modal.component';
import { NorteComponent } from './components/music-collection/norte/norte.component';
import { RegionalMusicContainerComponent } from './shared/regional-music-container/regional-music-container.component';
import { SafePipe } from './shared/pipes/safe.pipe';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { CentroOesteComponent } from './components/music-collection/centro-oeste/centro-oeste.component';
import { NordesteComponent } from './components/music-collection/nordeste/nordeste.component';
import { SulComponent } from './components/music-collection/sul/sul.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GalleryModule } from 'ng-gallery';
import { LightboxModule } from  'ng-gallery/lightbox';
import { PhotoCollectionComponent } from './components/photo-collection/photo-collection.component';
import { DirectorsBoardComponent } from './components/directors-board/directors-board.component';
import { DecorationsComponent } from './components/decorations/decorations.component';
import { NewsComponent } from './components/news/news.component';
import { HistoryComponent } from './components/history/history.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainPageComponent,
    IntroTextComponent,
    FooterComponent,
    MusicCollectionComponent,
    SudesteComponent,
    PdfModalComponent,
    NorteComponent,
    RegionalMusicContainerComponent,
    SafePipe,
    CentroOesteComponent,
    NordesteComponent,
    SulComponent,
    PhotoCollectionComponent,
    DirectorsBoardComponent,
    DecorationsComponent,
    NewsComponent,
    HistoryComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule,
    PdfViewerModule,
    FormsModule,
    NgbCollapseModule,
    BrowserAnimationsModule,
    GalleryModule,
    LightboxModule
  ],
  providers: [{
    provide: LocationStrategy, useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
