import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  AfficherusersService } from '../../../Services/crud_chef/afficherusers/afficherusers.service';

@Component({
  selector: 'app-gerer-users',
  templateUrl: './gerer-users.component.html',
  styleUrl: './gerer-users.component.css'
})
export class GererUsersComponent implements OnInit  {

  constructor(private router: Router,    private afficherusersService: AfficherusersService ) { }

  redirectToAfficherChefs(): void {
    this.router.navigate(['/admin/afficherchefs']);
  }
  redirectToAfficherEmployes(): void {
    this.router.navigate(['/admin/afficheremployes']);
  }
  nombreDeChefs: number = 0;
  nombreDeEmployes: number = 0;


  ngOnInit(): void {
    this.obtenirNombreDeChefs();
    this.obtenirNombreDeEmployes()
  }

redirectToHome() {
  this.router.navigate(['/home']);
}
obtenirNombreDeChefs(): void {
  this.afficherusersService.obtenirNombreDeChefs().subscribe(nombre => {
    this.nombreDeChefs = nombre;
  });
}
obtenirNombreDeEmployes(): void {
  this.afficherusersService.obtenirNombreDeEmployes().subscribe(nombre2 => {
    this.nombreDeEmployes = nombre2;
  });
}
}
