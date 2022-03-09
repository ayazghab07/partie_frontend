import { Component, OnInit } from '@angular/core';
import { Parieur } from 'src/model/parieur';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthServiceService } from 'src/services/auth-service.service'; 
@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit {
  
  parieur = new Parieur ();
  erreur=0;
   a:boolean;
  constructor(private AuthServiceService:AuthServiceService,
    private router: Router) { }
  ngOnInit(): void {
  }
  onSubmit(f: NgForm)
  
  {this.a=this.AuthServiceService.signIn(this.parieur);
    if(this.a)
      {
        
        this.router.navigate(['/parieurs']);
        }
        else
        {
        this.erreur = 1;
        }
      }
    }