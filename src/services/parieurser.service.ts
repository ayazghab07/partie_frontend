import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Parieur } from 'src/model/parieur';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParieurserService {
  nouvParieur:any=new Parieur();
  host="http://127.0.0.1:8033"

  constructor(private http: HttpClient) { }

  
  

  addParieur(newParieur:Parieur){
    //console.warn(JSON.stringify(newAdmin));
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(newParieur);
    return  this.http.post<any>('http://127.0.0.1:8033/spring/api/parieur',body,{'headers':headers}).subscribe(data => {
     data.id;
     
 });
 
 
  }
}