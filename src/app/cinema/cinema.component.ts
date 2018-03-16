import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.css']
})
export class CinemaComponent implements OnInit {

  cinemas = [
    {
      titulo: 'Ocimax',
      descripcion: 'Salas Ocimax ubicadas en..',
      img: './assets/img/ocimax.jpg'},
    {
      titulo: 'Sala Augusta',
      descripcion: 'La Sala Augusta abierta en 1973 cuenta con el encanto de...',
      img: './assets/img/sala-augusta.jpg'},
    {
      titulo: 'Cines IMAX',
      descripcion: 'Disfruta de la maxima experiencia en cine con...',
      img: './assets/img/imax.jpg'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
