import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { User } from '../../../Models/User';
import { Router } from '@angular/router';
import { AjouterchefService } from '../../../Services/crud_chef/ajouterchef/ajouterchef.service';
@Component({
  selector: 'app-ajouteruser',
  templateUrl: './ajouteruser.component.html',
  styleUrl: './ajouteruser.component.css'
})
export class AjouteruserComponent {


@Input() role: string = '';
@Input() showModal: boolean = false;
 submitted: boolean = false;



 chefForm!: FormGroup;
 chef: User = new User();

 constructor(
   private formBuilder: FormBuilder,
   private serviceuser: AjouterchefService,
   private router: Router
 ) {}
openModal(role: string) {
  this.role = role;
  this.showModal = true;
  console.log(this.showModal)

}

 ngOnInit(): void {
   this.createForm();
 }
 /*
 closeModal() {
  this.showModal = false;
  console.log(this.showModal)

 }
*/
 setRole(role: string): void {
   this.chefForm.get('role')!.setValue(role);
 }

 createForm(): void {
   this.chefForm = this.formBuilder.group({
     nom: ['', Validators.required],
     prenom: ['', Validators.required],
     statut: ['', Validators.required],
     nbr_enfant: [''],
     service: ['', Validators.required],
     tel: ['', [Validators.required, this.validatePhoneNumber]],
     sexe: ['', Validators.required],
     email: ['', [Validators.required, this.validateEmail]],
     role: [this.role],
     login: [''],
     password: ['']
   });
   //si dtatut celebataire l nbr_enf non obligatoire
   const statutControl = this.chefForm.get('statut');
 if (statutControl) {
   statutControl.valueChanges.subscribe(value => {
     const nbr_enfantControl = this.chefForm.get('nbr_enfant');
     if (nbr_enfantControl) {
       if (value === 'marie') {
         nbr_enfantControl.setValidators([Validators.required, this.validateNombreEnfant]);
       } else {
         nbr_enfantControl.clearValidators();
       }
       nbr_enfantControl.updateValueAndValidity();
     }
   });
 }
 }


 validatePhoneNumber(control: AbstractControl): { [key: string]: any } | null {
   const phoneNumber = control.value;
   const isValidNumber = /^\d{8}$/.test(phoneNumber);
   const containsLetter = /[a-zA-Z]/.test(phoneNumber);

   if (control.value && !isValidNumber) {
     return { 'invalidPhoneNumber': true };
   }

   if (containsLetter) {
     return { 'invalidPhoneNumber': true, 'containsLetter': true };
   }

   return null;
 }
 validateEmail(control: AbstractControl): { [key: string]: any }  | null {
   const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
   if (control.value && !emailPattern.test(control.value)) {
     return { 'invalidEmail': true };
   }
   return null;
 }
 validateNombreEnfant(control: AbstractControl): { [key: string]: any }  | null {
   const nombreEnfant = control.value;
   if (nombreEnfant < 0) {
     return { 'invalidNumberOfChildren': true };
   }
   return null;
 }
 redirectToHome() {
  this.router.navigate(['/home']);
}

 ajouterChef(): void {
   this.submitted = true;
   this.chefForm.markAllAsTouched();
   if (this.chefForm.valid) {
     this.chef = this.chefForm.value;
     this.serviceuser.ajouterchef(this.chef).subscribe(() => {
       this.router.navigate(["admin/afficherchefs"]);
     });
   }
 }
}

