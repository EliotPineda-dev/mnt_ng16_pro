import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listaenlaces',
  templateUrl: './listaenlaces.component.html',
  styleUrls: ['./listaenlaces.component.css']
})
export class ListaenlacesComponent implements OnInit {

  @Input() url!: string;

  constructor() { }

  ngOnInit() {
  }

}
