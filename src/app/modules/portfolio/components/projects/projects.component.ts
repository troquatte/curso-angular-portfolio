import { Component, inject, signal } from '@angular/core';

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
      description:
        'Explore o fascinante mundo do desenvolvimento web no meu blog dedicado exclusivamente ao ecossistema Angular, Front-end, JavaScript, Node.js e TypeScript. Desvende os segredos por trás da construção de interfaces modernas, aprimore suas habilidades de programação front-end quanto back-end e mergulhe em conceitos avançados de JavaScript e TypeScript.',
      links: [
        {
          name: 'Blog / Site',
          href: 'https://vidafullstack.com.br/',
        },
      ],
    },
  ]);

  openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: 'dialog-container',
    });
  }
}
