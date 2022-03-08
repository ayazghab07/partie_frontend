import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompteComponent } from './compte/compte.component';
import { AjouterComponent } from './ajouter/ajouter.component';
import { AdmineComponent } from './admine/admine.component';
import { ListeparieurComponent } from './listeparieur/listeparieur.component';
const routes: Routes = [
  {path:'se_connecter',component:CompteComponent},
  {path:'s_inscrire',component:AjouterComponent},
  {path:'s_admine', component:AdmineComponent},
  {path:'listeparieur' ,component:ListeparieurComponent}
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
