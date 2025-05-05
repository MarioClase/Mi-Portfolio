import { NgFor, NgIf } from '@angular/common';
import { Component, TemplateRef, ViewChild } from '@angular/core';



@Component({
  selector: 'app-projects',
  imports: [NgIf, NgFor,],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {


  projects = [
    {
      title: 'Portfolio',
      description: 'Consulta del clima usando API externa con diseño responsive y limpio.',
      image: '../../../assets/img/projects/portfolio.jpg',
      github: 'https://github.com/MarioClase/Mi-Portfolio.git',
      demo: 'https://usuario.github.io/weather-app',
      open: false
    },
    {
      title: 'Gestor de Tareas',
      description: 'To-do app interactiva con filtros, animaciones y almacenamiento local.',
      image: '../../../assets/img/projects/portfolio.jpg',
      github: 'https://github.com/usuario/todo-app',
      demo: 'https://usuario.github.io/todo-app',
      open: false
    },
    {
      title: 'Portfolio Personal',
      description: 'Mi propio portfolio hecho con Angular y amor al detalle.',
      image: '../../../assets/img/projects/portfolio.jpg',
      github: 'https://github.com/usuario/portfolio',
      demo: '',
      open: false
    },
    {
      title: 'Portfolio Personal',
      description: 'Mi propio portfolio hecho con Angular y amor al detalle.',
      image: '../../../assets/img/projects/portfolio.jpg',
      github: 'https://github.com/usuario/portfolio',
      demo: '',
      open: false
    },
    {
      title: 'Portfolio Personal',
      description: 'Mi propio portfolio hecho con Angular y amor al detalle.',
      image: '../../../assets/img/projects/portfolio.jpg',
      github: 'https://github.com/usuario/portfolio',
      demo: '',
      open: false
    },
    {
      title: 'Portfolio Personal',
      description: 'Mi propio portfolio hecho con Angular y amor al detalle.',
      image: '../../../assets/img/projects/portfolio.jpg',
      github: 'https://github.com/usuario/portfolio',
      demo: '',
      open: false
    }
  ];

}

