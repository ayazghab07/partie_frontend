import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Parieur } from 'src/model/parieur';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParieurserService {
  host="http://127.0.0.1:8091"

  constructor(private http: HttpClient) { }

  public getParieur(){
    return this.http.get(this.host+"/par");
  }


  public addParieur(parieur):Observable<Parieur>{
    console.log(Parieur);
    return this.http.post<Parieur>(this.host+"/addParieur",parieur);
    
  }
 
 
}


