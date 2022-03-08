import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  constructor() {
   }

  ngOnInit(): void {
 
  }
  // Script to open and close sidebar
 // Script for side navigation
 w3_open() {
  var x = document.getElementById("mySidebar");
  x.style.width = "300px";
  x.style.paddingTop = "10%";
  x.style.display = "block";
}

// Close side navigation
 w3_close() {
  document.getElementById("mySidebar").style.display = "none";
}
 
 

}

