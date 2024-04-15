import { Component, ElementRef, OnInit } from '@angular/core';
import { User } from '../../../Models/User';
import { SupprimerchefService } from '../../../Services/crud_chef/supprimerchef/supprimerchef.service';
import { Router } from '@angular/router';
import { AfficherusersService } from '../../../Services/crud_chef/afficherusers/afficherusers.service';



@Component({
  selector: 'app-afficherchefs',
  templateUrl: './afficherchefs.component.html',
  styleUrl: './afficherchefs.component.css'
})
export class AfficherchefsComponent implements OnInit {
  chefs: User[] = [];
  chef: User = new User;

  constructor(
    private afficherusersService: AfficherusersService,
    private supprimerchefService: SupprimerchefService,
    private router:Router,

  ) {}


  ngOnInit(): void {
    this.affichertouschefs();
  }

   private affichertouschefs() {
    this.afficherusersService.affichertouschefs()
      .subscribe(chefs => {this.chefs = chefs});
  }

   supprimerChef(id: number): void {
    this.supprimerchefService.supprimerChef(id)
      .subscribe(() => {
        this.affichertouschefs();
    });
  }


  afficherChef(id: number): void{
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

openConfirmationModal(): void {
  const modal = document.getElementById('confirmationModal');
  if (modal) {
    modal.style.display = 'block';
  }
}

closeConfirmationModal(): void {
  const modal = document.getElementById('confirmationModal');
  if (modal) {
    modal.style.display = 'none';
  }
}


}
