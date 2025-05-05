import { NgFor, NgIf } from '@angular/common';
import { Component, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal, NgbCarouselModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-projects',
  imports: [NgIf, NgFor, NgbCarouselModule, NgbModalModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  @ViewChild('imageModal') imageModal?: TemplateRef<any>;

  projects = [
    {
      title: 'App de Clima',
      description: 'Consulta del clima usando API externa con diseño responsive y limpio.',
      images: [
        'assets/projects/weather-app-1.png',
        '',
        ''
      ],
      github: 'https://github.com/usuario/weather-app',
      demo: 'https://usuario.github.io/weather-app',
      open: false
    },
    {
      title: 'Gestor de Tareas',
      description: 'To-do app interactiva con filtros, animaciones y almacenamiento local.',
      images: [
        'assets/projects/weather-app-1.png',
        '',
        ''
      ],
      github: 'https://github.com/usuario/todo-app',
      demo: 'https://usuario.github.io/todo-app',
      open: false
    },
    {
      title: 'Portfolio Personal',
      description: 'Mi propio portfolio hecho con Angular y amor al detalle.',
      images: [
        'assets/projects/weather-app-1.png',
        '',
        ''
      ],
      github: 'https://github.com/usuario/portfolio',
      demo: '',
      open: false
    },
    {
      title: 'Portfolio Personal',
      description: 'Mi propio portfolio hecho con Angular y amor al detalle.',
      images: [
        'assets/projects/weather-app-1.png',
        '',
        ''
      ],
      github: 'https://github.com/usuario/portfolio',
      demo: '',
      open: false
    },
    {
      title: 'Portfolio Personal',
      description: 'Mi propio portfolio hecho con Angular y amor al detalle.',
      images: [
        'assets/projects/weather-app-1.png',
        '',
        ''
      ],
      github: 'https://github.com/usuario/portfolio',
      demo: '',
      open: false
    },
    {
      title: 'Portfolio Personal',
      description: 'Mi propio portfolio hecho con Angular y amor al detalle.',
      images: [
        'assets/projects/weather-app-1.png',
        '',
        ''
      ],
      github: 'https://github.com/usuario/portfolio',
      demo: '',
      open: false
    }
  ];

  selectedProjectImages: string[] = [];

  constructor(private modalService: NgbModal) {}

  openImageModal(index: number): void {
    this.selectedProjectImages = this.projects[index].images;
    this.modalService.open(this.imageModal, { size: 'xl', centered: true });
  }

}

