import { Component } from '@angular/core';
import { EmployeService } from '../../../Services/EmployeService/employe.service';
import { Conge } from '../../../Models/Conge';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-demandeconge',
  templateUrl: './demandeconge.component.html',
  styleUrl: './demandeconge.component.css'
})
export class DemandecongeComponent {
  conge: Conge = new Conge();
  selectedFile!:File ;
FormCongee!:FormGroup;
  constructor(private employeService: EmployeService,private fb:FormBuilder) { }
  ngOnInit(): void {
this.FormCongee=this.fb.group({
  type:[""],
  date_debut:[""]

})

    }
  ajouterConge(): void {
    debugger
    console.log("file"+this.selectedFile)
    const formData = new  FormData();
    const congee = this.FormCongee.value;
    formData.append('file',this.selectedFile);
    formData.append('conge',JSON.stringify(congee));

    //this.FormCongee.get("file")?.setValue(this.selectedFile.name)
    console.log("conge"+formData)


   this.employeService.ajouterconge(formData).subscribe((data)=>{
if (data){
  console.log("okk")
}
   })

  }


  onChange(event:any) {
    this.selectedFile = event.target.files[0];
}
     motifOptions = [
       { value: "Naissance d'un enfant", label: "Naissance d'un enfant" },
       { value: "Décès conjoint, enfant, ascendant, frère, soeur", label: "Décès conjoint, enfant, ascendant, frère, soeur" },
       { value: "Décès petit fils, petit fille, tante ou d'un oncle", label: "Décès petit fils, petit fille, tante ou d'un oncle" },
       { value: "Décès d'un cousin germain", label: "Décès d'un cousin germain" },
       { value: "Mariage", label: "Mariage" },
       { value: "Circoncision", label: "Circoncision" },
       { value: "Changement de domicile légale", label: "Changement de domicile légale" },
       { value: "Pèlerinage", label: "Pèlerinage" },
       { value: "Autorisation syndicale", label: "Autorisation syndicale" },
       { value: "Autre", label: "Autre" }
     ];
     showOther = false;

     toggleOther() {
       this.showOther = this.conge.motif === 'Autre';
     }


}
