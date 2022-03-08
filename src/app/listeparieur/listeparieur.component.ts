import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Parieur } from 'src/model/parieur';
import { ParieurserService } from 'src/services/parieurser.service';


@Component({
  selector: 'app-listeparieur',
  templateUrl: './listeparieur.component.html',
  styleUrls: ['./listeparieur.component.css']
})
export class ListeparieurComponent implements OnInit {
  parieur:any;
  ajout:boolean=false;
  
  nouvadmin=new Parieur();
  id: number;
  constructor(private serviceparieur: ParieurserService,
    private route:Router) { }

  ngOnInit(): void {
  this.serviceparieur.getParieur().subscribe(data=>{
    this.parieur=data;
})}
} 


