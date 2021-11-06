import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { Page404Component } from './page404/page404.component';

import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro/cadastro.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'cadastro',component:CadastroComponent},
  {path:'page404',component:Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
