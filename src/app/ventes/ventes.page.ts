import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ventes',
  templateUrl: './ventes.page.html',
  styleUrls: ['./ventes.page.scss'],
})
export class VentesPage implements OnInit {
  ventes = {
    nom: '',
    type: '',
    numero: '',
    presation_id: '',
  };
  constructor() {}

  ngOnInit() {}

  nouvelleVente() {}
}
