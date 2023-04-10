import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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
import { PdfModalComponent } from './components/music-collection/pdf-modal/pdf-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainPageComponent,
    IntroTextComponent,
    FooterComponent,
    MusicCollectionComponent,
    SudesteComponent,
    PdfModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule,
    PdfViewerModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
