import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service';
import { Posts } from './posts.modul';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Posts[];

  constructor(private exibirPostagens: PostsService) {
    this.exibirPostagens.exibirPosts()
      .subscribe(
        resposta => {
          this.posts = resposta
        }
      )
  }

  ngOnInit() {
  }

}
