import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
})
export class ServicesPage implements OnInit {
  // Définition du modèle de la prestation
  prestation = {
    nom: '',
    prix: '',
    duree: '',
  };

  newPrestation: any[] = []; // Tableau pour stocker les prestations
  editingIndex: number | null = null; // Index de la prestation en cours de modification (null si aucune modification)
  constructor() {}

  ngOnInit() {
    // Récupération des prestations existantes depuis le localStorage
    this.newPrestation = JSON.parse(
      localStorage.getItem('prestations') || '[]'
    );
    console.log(this.newPrestation);
  }

  // Méthode appelée lors de la soumission du formulaire
  onSubmit() {
    // Vérification que tous les champs sont remplis
    if (
      this.prestation.nom !== '' &&
      this.prestation.prix !== '' &&
      this.prestation.duree !== ''
    ) {
      console.log('Données soumises :', this.prestation);

      if (this.editingIndex !== null) {
        // Si la prestation existe déjà, on la met à jour
        this.newPrestation[this.editingIndex] = { ...this.prestation };
        this.editingIndex = null; // Réinitialiser l'index après modification
      } else {
        // Sinon, on ajoute la nouvelle prestation à la liste
        this.newPrestation.push({ ...this.prestation });
      }

      // Mise à jour du localStorage avec la nouvelle liste de prestations
      localStorage.setItem('prestations', JSON.stringify(this.newPrestation));

      // Réinitialisation du formulaire
      this.prestation = { nom: '', duree: '', prix: '' };

      console.log(
        'Données enregistrées dans le localStorage',
        this.newPrestation
      );
    } else {
      // Si des champs sont manquants
      console.log('Tous les champs doivent être remplis');
    }
  }

  // Méthode pour supprimer une prestation
  deleteItem(item: any) {
    // Trouver l'index de l'élément à supprimer
    const index = this.newPrestation.indexOf(item);

    if (index !== -1) {
      // Retirer la prestation de la liste
      this.newPrestation.splice(index, 1);

      // Mettre à jour le localStorage après suppression
      localStorage.setItem('prestations', JSON.stringify(this.newPrestation));

      console.log('Prestation supprimée:', item);
    }
  }

  // Méthode pour remplir le formulaire avec les données de la prestation à modifier
  updateItem(item: any) {
    this.prestation = { ...item };
    // Stocker l'index de la prestation en cours de modification
    this.editingIndex = this.newPrestation.indexOf(item);
  }
}
