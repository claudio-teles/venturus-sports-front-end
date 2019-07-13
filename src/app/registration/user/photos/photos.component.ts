import { Component, OnInit } from '@angular/core';
import { PhotosService } from './photos.service';
import { Photos } from './photos.module';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  listaDeImagens: Photos[];

  constructor(private photosService: PhotosService) {}

  ngOnInit() {
    this.photosService.mostrarPhotos()
      .subscribe(
        respostaDoServidor => {
          this.listaDeImagens = respostaDoServidor
        }
      )
  }

}
