import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from 'src/model/admin';
import { AdminServiceService } from 'src/services/admin-service.service';

@Component({
  selector: 'app-admine',
  templateUrl: './admine.component.html',
  styleUrls: ['./admine.component.css']
})
export class AdmineComponent implements OnInit {
  nouvadmin=new Admin();

  constructor(private serviceadmin:AdminServiceService,
    private route:Router) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm){
    this.serviceadmin.addAdmin(this.nouvadmin).subscribe(data=>{
      
 
      //this.route.navigate(['/addadmin']);
     
    })
 
   
  }

}


