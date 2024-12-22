import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ventes',
  templateUrl: './ventes.page.html',
  styleUrls: ['./ventes.page.scss'],
})
export class VentesPage implements OnInit {
  ventes = {
    nom: '',
    type: '', // enfant ou adulte
    numero: '',
    presation_id: null, // on va stocker l'index de l'objet prestation_recupere qui a ete selectionner
    montant_recu: 0,
  };
  monnaie: number = 0;
  total: number = 0;
  prestation_recupere: any;
  enregistrerVente: any[] = [];
  enregistrerClient: any[] = [];
  constructor() {}

  ngOnInit() {
    this.prestation_recupere = JSON.parse(
      localStorage.getItem('prestations') || '[]'
    );
    this.enregistrerVente = JSON.parse(localStorage.getItem('ventes') || '[]');
    this.enregistrerClient = JSON.parse(
      localStorage.getItem('clients') || '[]'
    );
  }

  calculerResume() {
    console.log('Index des le chargment', this.ventes.presation_id);

    // calculons le prix total a afficher
    const indexExist =
      this.ventes.presation_id !== null
        ? Number(this.ventes.presation_id)
        : null;

    if (this.ventes.presation_id !== null) {
      const prestation = this.prestation_recupere[this.ventes.presation_id];
      this.total = prestation ? prestation.prix : 0;
    } else {
      this.total = 0;
    }
    this.calculerMonnaie();
  }
  // Calculer la monnaie à rendre
  calculerMonnaie() {
    const monnaie = this.ventes.montant_recu - this.total;
    if (monnaie > 0) {
      this.monnaie = this.ventes.montant_recu - this.total;
    } else {
      this.monnaie = 0;
    }
  }

  nouvelleVente() {
    this.enregistrerVente.push({ ...this.ventes, total: this.total });

    this.enregistrerClient.push({
      nom: this.ventes.nom,
      numero: this.ventes.numero,
    });
    localStorage.setItem('ventes', JSON.stringify(this.enregistrerVente));
    localStorage.setItem('clients', JSON.stringify(this.enregistrerClient));
    console.log('ventes', this.enregistrerVente);
    console.log('clients', this.enregistrerClient);
  }
}
