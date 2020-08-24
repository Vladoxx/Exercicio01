import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eu',
  templateUrl: './eu.component.html',
  styleUrls: ['./eu.component.css']
})
export class EuComponent implements OnInit {

  constructor() { }
  nome: string = 'Wladimir';
  idade: number = 33;
  estudo_na: string = 'Toti';
  gosto_de: string = 'Frango frito, trilhas e montanhas';
  cidade: string = 'Rio de Janeiro';
  foto: string = 'assets/PERFIL2.jpg';

  ngOnInit(): void {
  }

}
