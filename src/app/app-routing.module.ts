import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { TelaInicialProfComponent } from './tela-inicial-prof/tela-inicial-prof.component';
import { authpGuard } from './guards/authp.guard';
import { TelaInicialAdmComponent } from './tela-inicial-adm/tela-inicial-adm.component';
import { TelaLoginAdmComponent } from './tela-login-adm/tela-login-adm.component';
import { CadastrarProfComponent } from './admin/cadastrar-prof/cadastrar-prof.component';
import { CadastrarSalaComponent } from './admin/cadastrar-sala/cadastrar-sala.component';
import { CadastrarDisciplinasComponent } from './admin/cadastrar-disciplinas/cadastrar-disciplinas.component';
import { CadastrarCursoComponent } from './admin/cadastrar-curso/cadastrar-curso.component';
import { GerenciarProfessorComponent } from './admin/gerenciar-professor/gerenciar-professor.component';
import { GerenciarDisciplinaComponent } from './admin/gerenciar-disciplina/gerenciar-disciplina.component';
import { GerenciarCursosComponent } from './admin/gerenciar-cursos/gerenciar-cursos.component';
import { GerenciarSalasComponent } from './admin/gerenciar-salas/gerenciar-salas.component';
import { EditarDisciplinasComponent } from './admin/editar-disciplinas/editar-disciplinas.component';
import { EditarProfessorComponent } from './admin/editar-professor/editar-professor.component';
import { EditarCursoComponent } from './admin/editar-curso/editar-curso.component';
import { EditarSalasComponent } from './admin/editar-salas/editar-salas.component';

const routes: Routes = [
  {path: 'login', component: TelaLoginComponent},
  {path: 'login-adm', component: TelaLoginAdmComponent},
  {path: 'tela-inicial-prof', component: TelaInicialProfComponent},
  {path: '', component: TelaInicialAdmComponent},
  {path: 'admin/cadastrar_professor', component: CadastrarProfComponent},
  {path: 'admin/cadastrar_sala', component: CadastrarSalaComponent},
  {path: 'admin/cadastrar_disc', component: CadastrarDisciplinasComponent},
  {path: 'admin/gerenciar_disc', component: GerenciarDisciplinaComponent},
  {path: 'admin/cadastrar_curso', component: CadastrarCursoComponent},
  {path: 'admin/gerenciar_professor', component: GerenciarProfessorComponent},
  {path: 'admin/gerenciar_curso', component: GerenciarCursosComponent},
  {path: 'admin/gerenciar_sala', component: GerenciarSalasComponent},
  {path: 'admin/editar_disc/:id', component: EditarDisciplinasComponent},
  {path: 'admin/editar_professores/:id', component: EditarProfessorComponent},
  {path: 'admin/editar_curso/:id', component: EditarCursoComponent},
  {path: 'admin/editar_sala/:id', component: EditarSalasComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
