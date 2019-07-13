import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { MenuItem } from 'primeng/components/common/menuitem';
import { AppService } from './app.service';
import { Users } from './user.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'venturus-sports-front-end';
  items: MenuItem[];

  opcoes: string[] = [];

  opcoesFiltradas: any[];
  opcao: string;
  
  users: Users[];

  constructor(private rota: Router, private appService: AppService) {
    this.opcoes = this.appService.mostrarOpcoes();
  }

  filtrarOpcoes(event) {
    this.opcoesFiltradas = [];
    for (let index = 0; index < this.opcoes.length; index++) {
      let opcao = this.opcoes[index];
      if (opcao.toLowerCase().indexOf(event.query.toLowerCase()) == 0) {
        this.opcoesFiltradas.push(opcao);
      }
    }
  }

  ngOnInit(): void {

    this.appService.mostrarUsuarios().subscribe(
      resposta => {
        this.users = resposta
        console.log('Resposta: '+this.users)
      }
    )

    this.items = [
      {
        label: 'Fulano', icon: 'fa fa-fw fa-check',
        items: [
            [
                {
                    label: '',
                    items: [
                      {
                        label: 'Friends List'
                      },
                      {
                        label: 'Saved Items'
                      },
                      {
                        label: 'Notifications'
                      },
                      {
                        label: 'User Preferences'
                      }
                    ]
                },
                {
                    label: '_________________________',
                    items: [
                      {
                        label: 'Log out'
                      }
                    ]
                }
            ]
        ]
      }


    ]

    

  }

}
