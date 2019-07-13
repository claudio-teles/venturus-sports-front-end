import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './registration/user/user.component';
import { PostsComponent } from './registration/user/posts/posts.component';
import { AlbumsComponent } from './registration/user/albums/albums.component';
import { PhotosComponent } from './registration/user/photos/photos.component';

const routes: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'albums', component: AlbumsComponent },
  { path: 'photos', component: PhotosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
