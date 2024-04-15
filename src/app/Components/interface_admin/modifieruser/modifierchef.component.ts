import { Component, OnInit } from '@angular/core';
import { User } from '../../../Models/User';
import { ModifierchefService } from '../../../Services/crud_chef/modifierchef/modifierchef.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-modifierchef',
  templateUrl: './modifierchef.component.html',
  styleUrls: ['./modifierchef.component.css']
})
export class ModifierchefComponent implements OnInit {

id! : number;
  chef = new User();

  constructor(private modifierchefService: ModifierchefService, private router:Router , private route:ActivatedRoute ) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.modifierchefService.afficherChef(this.id).subscribe((data) => {
      this.chef = data;
    }, error => console.log(error));
  }

  onSubmit() {
    this.modifierchefService.modifierChef(this.chef, this.id).subscribe((data) => {
      console.log("Modification réussie !");
      this.router.navigate(['admin/afficherusers']);
    }, error => {
      console.log("Erreur lors de la modification :", error);
    });
  }



  }


