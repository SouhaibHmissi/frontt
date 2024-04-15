import { Component, OnInit } from '@angular/core';
import { Conge } from '../../../Models/Conge';
import { ChefService } from '../../../Services/ChefService/chef.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-afficherconges',
  templateUrl: './afficherconges.component.html',
  styleUrls: ['./afficherconges.component.css']
})
export class AffichercongesComponent implements OnInit {
  conges: Conge[] = [];

  constructor(
    private chefService: ChefService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.affichertousconges();
  }

  private affichertousconges() {
    this.chefService.affichertousconges()
      .subscribe(conges => this.conges = conges);
  }


  refuserConge(conge: Conge): void {
    this.chefService.refuserConge(conge.id)
      .subscribe(() => {
        this.affichertousconges();
      });
}
confirmerConge(conge: Conge): void {
  this.chefService.confirmerConge(conge.id)
    .subscribe(() => {
      this.affichertousconges();
    });
}
getStatusStyle(statut: string): any {
  switch (statut) {
    case 'Confirmé':
      return { 'background-color': '#90EE90', color: 'white', 'border-radius': '10px' };
    case 'Refusé':
      return { 'background-color': '#DC143C', color: 'white', 'border-radius': '  10px' };
    case 'En_Attente':
      return { 'background-color': '#FFCE26', color: 'white', 'border-radius': '10px' };
    default:
      return {};
  }
}

redirectToHome() {
  this.router.navigate(['/home']);
}

}
