import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Parieur } from 'src/model/parieur';
import { ParieurserService } from 'src/services/parieurser.service';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent implements OnInit {
  nouvparieur=new Parieur();

  constructor(private serviceparieur:ParieurserService,
    private route:Router) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm){
    this.serviceparieur.addParieur(this.nouvparieur).subscribe(data=>{
      
 
      this.route.navigate(['/listeParieurs']);
     
    })
 
   
  }

}