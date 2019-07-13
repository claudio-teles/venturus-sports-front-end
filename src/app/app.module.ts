import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MegaMenuModule } from 'primeng/megamenu';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';
import { GalleriaModule } from 'primeng/galleria';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './registration/user/user.component';
import { PostsComponent } from './registration/user/posts/posts.component';
import { AlbumsComponent } from './registration/user/albums/albums.component';
import { PhotosComponent } from './registration/user/photos/photos.component';
import { MenuComponent } from './menu/menu.component';
import { AppService } from './app.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PostsComponent,
    AlbumsComponent,
    PhotosComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MegaMenuModule,
    BreadcrumbModule,
    AutoCompleteModule,
    FormsModule,
    InputTextModule,
    RadioButtonModule,
    TriStateCheckboxModule,
    GalleriaModule,
    HttpClientModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
