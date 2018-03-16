import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  peliculas = [
    {
      titulo: 'Thor',
      descripcion: 'Thor lucha por restablecer el orden en todo el cosmos...',
      img: './assets/img/thor.jpg'},
    {
      titulo: 'Tomb Raider',
      descripcion: 'Lara Croft es una joven arqueóloga inmersa en su primera expedición...',
      img: './assets/img/traider.jpg'},
    {
      titulo: 'Black Panther',
      descripcion: 'Después de lo sucedido en \'Capitán América: Civil War\', T\'Challa regresa a su...',
      img: './assets/img/panther.jpg'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
