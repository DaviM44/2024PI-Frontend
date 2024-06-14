import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { TelaInicialProfComponent } from './tela-inicial-prof/tela-inicial-prof.component';
import { authpGuard } from './guards/authp.guard';
import { TelaInicialAdmComponent } from './tela-inicial-adm/tela-inicial-adm.component';
import { TelaLoginAdmComponent } from './tela-login-adm/tela-login-adm.component';
import { CadastrarProfComponent } from './cadastrar-prof/cadastrar-prof.component';
import { CadastrarSalaComponent } from './admin/cadastrar-sala/cadastrar-sala.component';
import { CadastrarDisciplinasComponent } from './admin/cadastrar-disciplinas/cadastrar-disciplinas.component';

const routes: Routes = [
  {path: 'login', component: TelaLoginComponent},
  {path: 'login-adm', component: TelaLoginAdmComponent},
  {path: 'tela-inicial-prof', component: TelaInicialProfComponent},
  {path: 'admin', component: TelaInicialAdmComponent},
  {path: 'admin/cadastrar_professor', component: CadastrarProfComponent},
  {path: 'admin/cadastrar_sala', component: CadastrarSalaComponent},
  {path: 'admin/cadastrar_disc', component: CadastrarDisciplinasComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
