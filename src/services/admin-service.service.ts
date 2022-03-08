import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Admin } from 'src/model/admin';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {
  host="http://127.0.0.1:8092"
  

  constructor(private http: HttpClient) { }



  public addAdmin(admin):Observable<Admin>{
    console.log(admin);
    return this.http.post<Admin>(this.host+"/addadmin",admin);
    
  }
 
 
}