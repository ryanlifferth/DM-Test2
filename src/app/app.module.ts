import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { FilesComponent } from './modules/home/files/files.component';
import { FilesMapComponent } from './modules/home/files-map/files-map.component';
import { NewsComponent } from './modules/home/news/news.component';
import { HeaderComponent } from './ui/header/header.component';
import { FooterComponent } from './ui/footer/footer.component';
import { SidebarComponent } from './ui/sidebar/sidebar.component';
import { NewFileComponent } from './modules/home/new-file/new-file.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilesComponent,
    FilesMapComponent,
    NewsComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    NewFileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyAs_Y6kGdxcrtXwIaNvaexYCMsiw4o22i0' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
