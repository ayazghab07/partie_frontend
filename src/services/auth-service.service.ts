import { Injectable } from '@angular/core';
import { Parieur } from 'src/model/parieur';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  parrieur:Parieur[];
  verif:Boolean;
public loggedUser:any;
public isloggedIn: boolean = false;

  
 
  
  constructor(private httpclient:HttpClient,private router:Router) { 
      this.httpclient.get("http://localhost:8034/spring/api/par").subscribe(
  resp=>{
    this.parrieur=Object.values(resp);
  }
  )
  }
  

  signIn(parieur:Parieur) 
  {
    let valideuser:boolean=true;
    this.parrieur.forEach((curparieur=>{
if((parieur.password===curparieur.password&& parieur.email===curparieur.email))
{
valideuser=true;
this.loggedUser=parieur.password;
this.loggedUser=parieur.email;
this.isloggedIn=true;
localStorage.setItem('loggedUser',this.loggedUser);
localStorage.setItem('isloggedIn',String(this.isloggedIn));


}
}));



    
return valideuser ;

}

}