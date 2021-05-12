import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { SectionsModule } from './components/sections/sections.module';

import { AppComponent } from './app.component';
import { ArticleComponent } from './pages/article/article.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LogoComponent } from './components/logo/logo.component';
import { SearchComponent } from './components/search/search.component';
import { PosterComponent } from './components/poster/poster.component';
import { BlockComponent } from './components/block/block.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    HeaderComponent,
    SidebarComponent,
    LogoComponent,
    SearchComponent,
    PosterComponent,
    BlockComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, SectionsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
