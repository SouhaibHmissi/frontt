import { Component } from '@angular/core';
import { User } from '../../../../Models/User';
import { SupprimerchefService } from '../../../../Services/crud_chef/supprimerchef/supprimerchef.service';
import { AfficherusersService } from '../../../../Services/crud_chef/afficherusers/afficherusers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-afficheremployes',
  templateUrl: './afficheremployes.component.html',
  styleUrl: './afficheremployes.component.css'
})
export class AfficheremployesComponent {
  employes: User[] = [];
  employe: User = new User;

  constructor(
    private afficherusersService: AfficherusersService,
    private supprimerchefService: SupprimerchefService,
    private router:Router,

  ) {}


  ngOnInit(): void {
    this.affichertousemployes();
  }

  private affichertousemployes() {
    this.afficherusersService.affichertousemploye()
      .subscribe((employes) => {
        this.employes = employes;
      });
  }
  supprimerEmploye(id: number): void {
    this.supprimerchefService.supprimerChef(id)
      .subscribe(() => {
        this.affichertousemployes();
    });
  }
  afficherEmploye(id: number): void{
    this.router.navigate(['admin/afficheruser',id]);
    }
  showModal: boolean = false;
  role: string = '';

  openModal(role: string) {
    this.role = role;
    this.showModal = true;
    console.log(this.showModal)

  }

  closeModal(): void {
    this.showModal = false;
  console.log(this.showModal)
  }
  redirectToHome() {
    this.router.navigate(['/home']);
  }
}
