import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReaderComponent } from './reader/reader.component';
import { FormsModule } from '@angular/forms';
import { StatsComponent } from './site/stats/stats.component';
import { MediaComponent } from './site/media/media.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { OfflineComponent } from './offline/offline.component';

@NgModule({
  declarations: [
    AppComponent,
    ReaderComponent,
    StatsComponent,
    MediaComponent,
    PageNotFoundComponent,
    OfflineComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
