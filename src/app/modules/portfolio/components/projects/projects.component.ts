import { Component, inject, signal } from '@angular/core';

// Enum
import { EDialogPanelClass } from '../../enum/EDialog-panel-class.enum';

// Material
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

// Interface
import { IProjects } from '../../interface/IProjects.interface';

// Dialog
import { DialogProjectsComponent } from '../../../../shared/components/dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);

  public arrayProjects = signal<IProjects[]>([
    {
      imgSrc: 'assets/img/projects/vfull.png',
      imgAlt: 'Projeto Vida Fullstack',
      title: 'Vida Fullstack',
      width: '100px',
      height: '51px',
      description:
        '<p>Explore o fascinante mundo do desenvolvimento web no meu blog dedicado exclusivamente ao ecossistema Angular, Front-end, JavaScript, Node.js e TypeScript.</p> <p>Desvende os segredos por trás da construção de interfaces modernas, aprimore suas habilidades de programação front-end quanto back-end e mergulhe em conceitos avançados de JavaScript e TypeScript.</p>',
      links: [
        {
          name: 'Conheça o Blog',
          href: 'https://vidafullstack.com.br/',
        },
      ],
    },
    {
      imgSrc: 'assets/img/projects/lista-de-tarefas.png',
      imgAlt: 'Lista de Tarefas',
      title: 'Lista de Tarefas',
      width: '84px',
      height: '86px',
      description:
        '<p>Prepare-se para uma jornada empolgante de aprendizado e aperfeiçoamento, onde cada tarefa proposta representa um passo significativo em direção à maestria no desenvolvimento web.</p> <p>Estamos aqui para desbravar novos horizontes juntos e construir soluções inovadoras.</p> <p>Vamos começar essa emocionante jornada de conquistas e descobertas!</p>',
      links: [
        {
          name: 'Conheça o projeto',
          href: 'https://troquatte.github.io/curso-angular-lista-de-tarefas/browser/',
        },
      ],
    },
  ]);

  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS,
    });
  }
}
